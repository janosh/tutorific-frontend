import React from 'react';
import {connect} from 'react-redux';

import './Login.css';

class Login extends React.Component {

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (e) => {
    if (!this.node.contains(e.target) && this.props.app.loginPanelVisible)
      this.props.toggleLoginPanelVisible();
  }

  render() {
    return (
      <div id="login" ref={node => this.node = node}>
        <span onClick={this.props.toggleLoginPanelVisible}>{this.props.user.loggedIn ? this.props.user.firstname : 'Login'}</span>
        <form id="login-panel"
          className={this.props.app.loginPanelVisible ? null : 'hidden'}>
          <input type="text" placeholder="email"/>
          <input type="text" placeholder="password"/>
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
  toggleLoginPanelVisible: () => dispatch({type: 'toggleLoginPanelVisible'})
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);