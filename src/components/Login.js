import React from 'react';
import {connect} from 'react-redux';

import {updateLoginData} from '../actions';

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
    if (!this.node.contains(e.target) && this.props.app.loginPanelVisible)
      this.props.toggleLoginPanelVisibility();
  }

  render() {
    return (
      <div id="login" ref={node => this.node = node}>
        <span onClick={this.props.toggleLoginPanelVisibility}>{this.props.user.loggedIn ? this.props.user.firstname : 'Login'}</span>
        <form id="login-panel"
          className={this.props.app.loginPanelVisible ? null : 'hidden'}>
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
          <button>Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => ({
  toggleUserLoggedIn: () => dispatch({type: 'toggleUserLoggedIn'}),
  toggleLoginPanelVisibility: () => dispatch({type: 'toggleLoginPanelVisibility'}),
  updateLoginData: (data) => dispatch(updateLoginData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);