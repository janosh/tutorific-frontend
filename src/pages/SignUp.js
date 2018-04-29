import React from 'react';
import {connect} from 'react-redux';

import SelectPersonType from '../components/SelectPersonType';
import {updateSignUp,clearSignUpForm} from '../actions';
import Geosearch from '../components/Geosearch';
import config from '../config';
import './SignUp.css';

class SignUpPage extends React.Component {

  update = async (e) => {
    await this.props.updateSignUp({
      [e.target.name]: e.target.value
    });
  }

  updateSubjects = async (e) => {
    const subjects = [];
    for (let i = 0; i <= this.props.signUp.subjects.length; i++) {
      const subject = document.getElementById('subject' + i).value;
      subjects.push(subject);
    }
    await this.props.updateSignUp({subjects});
  }

  passwordsMatch = async (e) => {
    await this.update(e);
    if (this.props.signUp.password !== this.props.signUp.confirmPassword) {
      console.log("Passwords don't match!");
    }
  }

  submitForm = (e) => {
    e.preventDefault();
    fetch(config.backendUrl + this.props.userType, {
      method: 'post',
      body: JSON.stringify(this.props.signUp),
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
                <label htmlFor="firstname">First Name <span>*</span></label>
                <input
                  name="firstname"
                  id="firstname"
                  type="text"
                  placeholder="John"
                  required
                  onChange={this.update}
                  value={this.props.signUp.firstname}
                />
              </div>
              <div>
                <label htmlFor="lastname">Last Name <span>*</span></label>
                <input
                  name="lastname"
                  id="lastname"
                  type="text"
                  placeholder="Doe"
                  required
                  onChange={this.update}
                  value={this.props.signUp.lastname}
                />
              </div>
              <div>
                <label htmlFor="password">Password <span>*</span></label>
                <input
                  name="password"
                  id="password"
                  type="password"
                  placeholder={String.fromCharCode('0x2022').repeat(10)}
                  required
                  onChange={this.update}
                  value={this.props.signUp.password}
                />
              </div>
              <div>
                <label htmlFor="confirm-password">Confirm Password <span>*</span></label>
                <input
                  name="confirmPassword"
                  id="confirm-password"
                  type="password"
                  placeholder={String.fromCharCode('0x2022').repeat(10)}
                  required
                  onChange={this.passwordsMatch}
                  value={this.props.signUp.confirmPassword}
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
              {[...Array(this.props.signUp.subjects.length + 1)].map((x, i) =>
                  <div key={this.props.signUp.subjects[i]}>
                    <label htmlFor="subjects">Subject {i + 1} <span>*</span></label>
                    <input
                      name="subjects"
                      id={'subject' + i}
                      type="subjects"
                      required
                      list="subjects"
                      onChange={this.updateSubjects}
                      value={this.props.signUp.subjects[i]}
                    />
                  </div>
                )
              }
            </div>
          </div>
          <div className="signup-form-section contact-info">
            <h2>Contact</h2>
            <div className="signup-form-section-fields contact-info">
              <div>
                <label htmlFor="email">Email <span>*</span></label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="john@doe.com"
                  required
                  onChange={this.update}
                  value={this.props.signUp.email}
                />
              </div>
              <div>
                <label htmlFor="phone">Phone <span>*</span></label>
                <input
                  name="phone"
                  id="phone"
                  type="tel"
                  placeholder="+1 234 567 890"
                  required
                  onChange={this.update}
                  value={this.props.signUp.phone}
                />
              </div>
              <div>
                <label htmlFor="address">Address <span>*</span></label>
                <Geosearch name="address" storePrefix="signUpData" placeholder="Wonderland"/>
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
                  value={this.props.signUp.birthday}
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
                  value={this.props.signUp.birthplace}
                />
              </div>
              <div>
                <label htmlFor="gender">Gender <span>*</span></label>
                <select
                  name="gender"
                  id="gender"
                  required
                  onChange={this.update}
                  value={this.props.signUp.gender}
                >
                  <option disabled style={{display: 'none'}}></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {userType === 'student' && <React.Fragment>
                <div>
                  <label htmlFor="grade">Grade <span>*</span></label>
                  <input
                    name="grade"
                    id="grade"
                    type="number"
                    min="1"
                    max="13"
                    placeholder="1"
                    required
                    onChange={this.update}
                    value={this.props.signUp.grade}
                    />
                </div>
                <div>
                  <label htmlFor="schooltype">Schooltype <span>*</span></label>
                  <select
                    name="schoolType"
                    id="schooltype"
                    required
                    onChange={this.update}
                    value={this.props.signUp.schoolType}
                  >
                    <option disabled style={{display: 'none'}}></option>
                    <option value="elementary">Elementary School</option>
                    <option value="middle">Middle School</option>
                    <option value="high">High School</option>
                    <option value="special-needs">Special-Needs School</option>
                    <option value="vocational">Vocational School</option>
                    <option value="refugee">Refugee School</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="youth-organization">Youth Organization</label>
                  <input
                    name="youth-organization"
                    id="youth-organization"
                    type="text"
                    placeholder="Unicef"
                    onChange={this.update}
                    value={this.props.signUp.youthOrganization}
                  />
                </div>
              </React.Fragment>}
              {userType === 'tutor' && <React.Fragment>
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
                    value={this.props.signUp.semester}
                    />
                </div>
                <div>
                  <label htmlFor="field-of-study">Field of Study</label>
                  <input
                    name="field-of-study"
                    id="field-of-study"
                    type="text"
                    placeholder="Ufology"
                    onChange={this.update}
                    value={this.props.signUp.fieldOfStudy}
                  />
                </div>
              </React.Fragment>}
            </div>
          </div>
        </form>
        <div id="submit-sign-up-form">
          <button onClick={this.submitForm}>Submit</button>
          <button onClick={() => {
            if (window.confirm('Are you sure you want to clear the form? This action cannot be undone.'))
              this.props.clearSignUpForm()}}
          >Clear Form</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userType: state.app.signupUserType,
    signUp: state.signUp
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateSignUp: (subtype, data) => dispatch(updateSignUp(subtype, data)),
  clearSignUpForm: () => dispatch(clearSignUpForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);