import React from 'react';
import {connect} from 'react-redux';

import SelectPersonType from './SelectPersonType';
import {updateLoginData, submitLoginData, toggleLoginPanel, toggleUserLoggedIn} from '../actions';

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
    const {login, currentUser, submitLoginData, toggleLoginPanel} = this.props;
    return (
      <div id="login" ref={node => this.node = node}>
        <span onClick={toggleLoginPanel}>
          {currentUser.firstName || 'Login'}
        </span>
        {login.showLoginModal && <form id="login-modal">
          <input
            name="email"
            type="email"
            placeholder="email"
            required
            onChange={this.update}
            value={login.email}
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            required
            onChange={this.update}
            value={login.password}
          />
          <SelectPersonType storePrefix="login"/>
          <button type="submit" className="login-button" onClick={() => submitLoginData(login)}>Login</button>
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
  toggleUserLoggedIn: () => dispatch(toggleUserLoggedIn()),
  toggleLoginPanel: () => dispatch(toggleLoginPanel()),
  updateLoginData: (data) => dispatch(updateLoginData(data)),
  submitLoginData: (data) => dispatch(submitLoginData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);