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

  submitFormData = (e) => {
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
    const userType = this.props.userType;
    return (
      <div id="signup-page">
        <div className="form-title">
          <h1>Sign up today with Tutorific!</h1>
          <SelectPersonType storePrefix="signup"/>
        </div>
        <form id="signup-form">
          <div className="signup-form-section account-info">
            <h2>Account</h2>
            <div className="signup-form-section-fields account-info">
              <div>
                <label htmlFor="firstname">First Name</label>
                <input
                  name="firstname"
                  id="firstname"
                  type="text"
                  placeholder="John"
                  required
                  onChange={this.update}
                  value={this.props.signUpData.firstname}
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
                  value={this.props.signUpData.lastname}
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
                  value={this.props.signUpData.password}
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
                  value={this.props.signUpData.confirmPassword}
                />
              </div>
            </div>
          </div>
          <div className="signup-form-section subjects-info">
            <h2>Subjects</h2>
            <datalist id="subjects">
              <option value="Math"/>
              <option value="Physics"/>
              <option value="Chemistry"/>
              <option value="Biology"/>
              <option value="Computer Science"/>
              <option value="English"/>
              <option value="Spanish"/>
              <option value="French"/>
              <option value="German"/>
              <option value="Italian"/>
              <option value="Chinese"/>
              <option value="Japanese"/>
              <option value="Latin"/>
              <option value="History"/>
              <option value="Politics"/>
              <option value="Ethics"/>
              <option value="Social Studies"/>
              <option value="Philosophy"/>
              <option value="Economics"/>
              <option value="Physical Education"/>
              <option value="Music"/>
              <option value="Art"/>
            </datalist>
            <div className="signup-form-section-fields subject-info">
              {this.props.signUpData.subjects.map(subject => {
                return (
                  <div key={subject.name}>
                    <label htmlFor="subjects">Subjects</label>
                    <input
                      name="subjects"
                      type="subjects"
                      required
                      list="subjects"
                      onChange={this.update}
                      value={subject.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="signup-form-section contact-info">
            <h2>Contact</h2>
            <div className="signup-form-section-fields contact-info">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="john@doe.com"
                  required
                  onChange={this.update}
                  value={this.props.signUpData.email}
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
                  value={this.props.signUpData.phone}
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
                  value={this.props.signUpData.address.street}
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
                  value={this.props.signUpData.address.number}
                />
              </div>
              <div>
                <label htmlFor="city">City</label>
                <input
                  name="Address.city"
                  id="city"
                  type="text"
                  placeholder="Paradise City"
                  required
                  onChange={this.update}
                  value={this.props.signUpData.address.city}
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
                  value={this.props.signUpData.address.zip}
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
                  value={this.props.signUpData.address.country}
                />
              </div>
            </div>
          </div>
          <div className="signup-form-section personal-info">
            <h2>Personal</h2>
            <div className="signup-form-section-fields personal-info">
              <div>
                <label htmlFor="birthday">Birthday</label>
                <input
                  name="birthday"
                  id="birthday"
                  type="date"
                  onChange={this.update}
                  value={this.props.signUpData.birthday}
                />
              </div>
              <div>
                <label htmlFor="birthplace">Birthplace</label>
                <input
                  name="birthplace"
                  id="birthplace"
                  type="tel"
                  placeholder="Honolulu"
                  onChange={this.update}
                  value={this.props.signUpData.birthplace}
                />
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  id="gender"
                  required
                  onChange={this.update}
                  value={this.props.signUpData.gender}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {userType === 'student' &&
              <div>
                <label htmlFor="grade">Grade</label>
                <input
                  name="grade"
                  id="grade"
                  type="number"
                  min="1"
                  max="13"
                  placeholder="1"
                  required
                  onChange={this.update}
                  value={this.props.signUpData.grade}
                  />
              </div>}
              {userType === 'tutor' &&
              <div>
                <label htmlFor="semester">Semester</label>
                <input
                  name="semester"
                  id="semester"
                  type="number"
                  min="1"
                  max="50"
                  placeholder="1"
                  onChange={this.update}
                  value={this.props.signUpData.semester}
                  />
              </div>}
              {userType === 'student' &&
              <div>
                <label htmlFor="schooltype">Schooltype</label>
                <select
                  name="schooltype"
                  id="schooltype"
                  required
                  onChange={this.update}
                  value={this.props.signUpData.schoolType}
                >
                  <option value="elementary">Elementary School</option>
                  <option value="middle">Middle School</option>
                  <option value="high">High School</option>
                  <option value="special-needs">Special-Needs School</option>
                  <option value="vocational">Vocational School</option>
                  <option value="refugee">Refugee School</option>
                </select>
              </div>}
              {userType === 'student' &&
              <div>
                <label htmlFor="youth-organization">Youth Organization</label>
                <input
                  name="youth-organization"
                  id="youth-organization"
                  type="text"
                  placeholder="Unicef"
                  onChange={this.update}
                  value={this.props.signUpData.youthOrganization}
                />
              </div>}
              {userType === 'tutor' &&
              <div>
                <label htmlFor="field-of-study">Field of Study</label>
                <input
                  name="field-of-study"
                  id="field-of-study"
                  type="text"
                  placeholder="Ufology"
                  onChange={this.update}
                  value={this.props.signUpData.fieldOfStudy}
                />
              </div>}
            </div>
          </div>
        </form>
        <div id="submit-sign-up-form">
          <button onClick={this.submitFormData}>Submit</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userType: state.app.signupUserType,
    signUpData: state.signUpData
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeUserType: (userType) => dispatch(changeUserType(userType)),
  updateSignUpData: (subtype, data) => dispatch(updateSignUpData(subtype, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);