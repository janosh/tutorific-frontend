import React from 'react';
import {connect} from 'react-redux';

import SelectPersonType from './SelectPersonType';
import {updateLoginData} from '../actions';
import config from '../config';

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
      this.props.toggleLoginPanel();
  }

  submitLoginData = (e) => {
    e.preventDefault();
    fetch(config.backendUrl + this.props.userType, {
      method: 'post',
      body: JSON.stringify(this.props.signUpData),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => console.log(res));
  }

  render() {
    return (
      <div id="login" ref={node => this.node = node}>
        <span onClick={this.props.toggleLoginPanel}>{this.props.user.loggedIn ? this.props.user.firstname : 'Login'}</span>
        <form id="login-panel" className={this.props.app.loginPanelVisible ? null : 'hidden'}>
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
          <button className="login-button" onClick={this.submitLoginData}>Login</button>
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
  toggleLoginPanel: () => dispatch({type: 'toggleLoginPanel'}),
  updateLoginData: (data) => dispatch(updateLoginData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);