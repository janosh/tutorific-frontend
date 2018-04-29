import React from 'react';
import {connect} from 'react-redux';

import SelectPersonType from './SelectPersonType';
import {updateLoginData, submitLoginData} from '../actions';

import './Login.css';

class Login extends React.Component {

  update = async (e) => {
    await this.props.updateLoginData({
      [e.target.name]: e.target.value
    });
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (e) => {
    if (!this.node.contains(e.target) && this.props.login.showLoginModal)
      this.props.toggleLoginPanel();
  }

  render() {
    return (
      <div id="login" ref={node => this.node = node}>
        <span onClick={this.props.toggleLoginPanel}>
          {this.props.currentUser.loggedIn ? this.props.currentUser.firstname : 'Login'}
        </span>
        {this.props.login.showLoginModal && <form id="login-modal">
          <input
            name="email"
            type="email"
            placeholder="email"
            required
            onChange={this.update}
            value={this.props.login.email}
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            required
            onChange={this.update}
            value={this.props.login.password}
          />
          <SelectPersonType storePrefix="login"/>
          <button className="login-button" onClick={() => this.props.submitLoginData({
            email: this.props.login.email,
            password: this.props.login.password,
            userType: this.props.login.userType,
          })}>Login</button>
        </form>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
    currentUser: state.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  toggleUserLoggedIn: () => dispatch({type: 'toggleUserLoggedIn'}),
  toggleLoginPanel: () => dispatch({type: 'toggleLoginPanel'}),
  updateLoginData: (data) => dispatch(updateLoginData(data)),
  submitLoginData: (data) => dispatch(submitLoginData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);