import React from 'react';
import {connect} from 'react-redux';

import SelectPersonType from '../components/SelectPersonType';
import {changeUserType, updateSignUpData} from '../actions';
import config from '../config';
import './SignUpPage.css';

class SignUpPage extends React.Component {

  update = async (e) => {
    const props = e.target.name.split('.');
    const prop = props.pop();
    const subtype = props.join('.');
    await this.props.updateSignUpData(subtype, {
      [prop]: e.target.value
    });
  }

  passwordsMatch = async (e) => {
    await this.update(e);
    if (this.props.signUpData.password !== this.props.signUpData.confirmPassword) {
      console.log("Passwords don't match!");
    }
  }

  submitFormData = (signUpData) => {
    fetch(config.backendUrl + this.props.userType, {
      method: 'post',
      body: JSON.stringify(signUpData)
    })
    .then(res => console.log(res));
  }

  render() {
    return (
      <div id="signup-page">
        <h1>Sign up as <SelectPersonType/></h1>
        <form id="signup-page">
          <h2>Account</h2>
          <div className="signup-form account-info">
            <div>
              <label htmlFor="firstname">First Name</label>
              <input
                name="firstname"
                id="firstname"
                type="text"
                placeholder="John"
                required
                onChange={this.update}
                value={this.props.signUpData.firstname || ''}
              />
            </div>
            <div>
              <label htmlFor="lastname">Last Name</label>
              <input
                name="lastname"
                id="lastname"
                type="text"
                placeholder="Doe"
                required
                onChange={this.update}
                value={this.props.signUpData.lastname || ''}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                name="password"
                id="password"
                type="password"
                placeholder={String.fromCharCode('0x2022').repeat(10)}
                required
                onChange={this.update}
                value={this.props.signUpData.password || ''}
              />
            </div>
            <div>
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                name="confirmPassword"
                id="confirm-password"
                type="password"
                placeholder={String.fromCharCode('0x2022').repeat(10)}
                required
                onChange={this.passwordsMatch}
                value={this.props.signUpData.confirmPassword || ''}
              />
            </div>
          </div>
          <h2>Contact</h2>
          <div className="signup-form contact-info">
            <div>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                id="email"
                type="email"
                placeholder="john@doe.com"
                required
                onChange={this.update}
                value={this.props.signUpData.email || ''}
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                name="phone"
                id="phone"
                type="tel"
                placeholder="+1 234 567 890"
                required
                onChange={this.update}
                value={this.props.signUpData.phone || ''}
              />
            </div>
            <div>
              <label htmlFor="street">Street</label>
              <input
                name="Address.street"
                id="street"
                type="text"
                placeholder="Long Lane"
                required
                onChange={this.update}
                value={this.props.signUpData.address.street || ''}
              />
            </div>
            <div>
              <label htmlFor="number">Number</label>
              <input
                name="Address.number"
                id="number"
                type="text"
                placeholder="42"
                required
                onChange={this.update}
                value={this.props.signUpData.address.number || ''}
              />
            </div>
            <div>
              <label htmlFor="zip">ZIP</label>
              <input
                name="Address.zip"
                id="zip"
                type="text"
                placeholder="6942"
                required
                onChange={this.update}
                value={this.props.signUpData.address.zip || ''}
              />
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <input
                name="Address.country"
                id="country"
                type="text"
                placeholder="Wonderland"
                required
                onChange={this.update}
                value={this.props.signUpData.address.country || ''}
              />
            </div>
          </div>
          <h2>Personal</h2>
          <div className="signup-form personal-info">
            <div>
              <label htmlFor="grade">Grade</label>
              <input id="grade" type="number" name="grade" min="1" max="13" placeholder="1" required/>
            </div>
            <div>
              <label htmlFor="gender">Gender</label>
              <select name="Gender" placeholder="Gender"><option>Male</option><option>Female</option><option>Other</option></select>
            </div>
          </div>
          <button onClick={() => this.submitFormData(this.props.signUpData)}>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userType: state.appState.userType,
    signUpData: state.appState.signUpData
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeUserType: (userType) => dispatch(changeUserType(userType)),
  updateSignUpData: (subtype, data) => dispatch(updateSignUpData(subtype, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);