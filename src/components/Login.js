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
    if (!this.node.contains(e.target) && this.props.app.showLoginModal)
      this.props.toggleLoginPanel();
  }

  render() {
    return (
      <div id="login" ref={node => this.node = node}>
        <span onClick={this.props.toggleLoginPanel}>
          {this.props.currentUser.loggedIn ? this.props.currentUser.firstname : 'Login'}
        </span>
        {this.props.app.showLoginModal && <form id="login-modal">
          <input
            name="loginEmail"
            type="email"
            placeholder="email"
            required
            onChange={this.update}
            value={this.props.app.loginEmail}
          />
          <input
            name="loginPassword"
            type="password"
            placeholder="password"
            required
            onChange={this.update}
            value={this.props.app.loginPassword}
          />
          <SelectPersonType storePrefix="login"/>
          <button className="login-button" onClick={() => this.props.submitLoginData({
            email: this.props.loginEmail,
            password: this.props.loginPassword,
            userType: this.props.loginUserType,
          })}>Login</button>
        </form>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app,
    currentUser: state.currentUser,
    loginEmail: state.app.loginEmail,
    loginPassword: state.app.loginPassword,
    loginUserType: state.app.loginUserType,
  };
};

const mapDispatchToProps = (dispatch) => ({
  toggleUserLoggedIn: () => dispatch({type: 'toggleUserLoggedIn'}),
  toggleLoginPanel: () => dispatch({type: 'toggleLoginPanel'}),
  updateLoginData: (data) => dispatch(updateLoginData(data)),
  submitLoginData: (data) => dispatch(submitLoginData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);