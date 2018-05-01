import React from 'react';
import {connect} from 'react-redux';

import SelectPersonType from '../components/SelectPersonType';
import {updateSignupForm, submitSignupForm, clearSignupForm} from '../actions';
import Geosearch from '../components/Geosearch';
import './Signup.css';

class SignupPage extends React.Component {

  update = async (e) => {
    await this.props.updateSignupForm({
      [e.target.name]: e.target.value
    });
  }

  updateSubjects = async (e) => {
    const subjects = [];
    const selects = document.querySelectorAll('.subject-info select');
    selects.forEach(select =>
      subjects.push(...Array.from(select.selectedOptions, option => option.value))
    );
    await this.props.updateSignupForm({subjects});
  }

  passwordsMatch = () => {
    if (this.props.signup.password !== this.props.signup.confirmPassword) {
      document.getElementById('confirm-password').setCustomValidity("Passwords don't match!");
      return false;
    }
    return true;
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.submitSignupForm(this.props.signup);
  }

  clearForm = (e) => {
    if (window.confirm('Are you sure you want to clear the form? This action cannot be undone.'))
      this.props.clearSignupForm()
  }

  render() {
    const signup = this.props.signup;
    return (
      <div id="signup-page">
        <div className="form-title">
          <h1>Sign up today with Tutorific!</h1>
          <SelectPersonType storePrefix="signup"/>
        </div>
        <form id="signup-form">
          <fieldset className="signup-form-section account-info">
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
                  value={signup.firstname}
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
                  value={signup.lastname}
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
                  value={signup.password}
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
                  onChange={this.update}
                  value={signup.confirmPassword}
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="signup-form-section contact-info">
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
                  value={signup.email}
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
                  value={signup.phone}
                />
              </div>
              <div>
                <label htmlFor="address">Address <span>*</span></label>
                <Geosearch name="address" storePrefix="signup" placeholder="Wonderland"/>
              </div>
            </div>
          </fieldset>
          <fieldset className="signup-form-section personal-info">
            <h2>Personal</h2>
            <div className="signup-form-section-fields personal-info">
              <div>
                <label htmlFor="birthday">Birthday</label>
                <input
                  name="birthday"
                  id="birthday"
                  type="date"
                  onChange={this.update}
                  value={signup.birthday}
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
                  value={signup.birthplace}
                />
              </div>
              <div>
                <label htmlFor="gender">Gender <span>*</span></label>
                <select
                  name="gender"
                  id="gender"
                  required
                  onChange={this.update}
                  value={signup.gender}
                >
                  <option hidden></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {signup.userType === 'student' && <React.Fragment>
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
                    value={signup.grade}
                    />
                </div>
                <div>
                  <label htmlFor="schooltype">Schooltype <span>*</span></label>
                  <select
                    name="schoolType"
                    id="schooltype"
                    required
                    onChange={this.update}
                    value={signup.schoolType}
                  >
                    <option hidden></option>
                    <option value="Elementary">Elementary School</option>
                    <option value="Middle">Middle School</option>
                    <option value="High">High School</option>
                    <option value="Special-Needs">Special-Needs School</option>
                    <option value="Vocational">Vocational School</option>
                    <option value="Refugee">Refugee School</option>
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
                    value={signup.youthOrganization}
                  />
                </div>
              </React.Fragment>}
              {signup.userType === 'tutor' && <React.Fragment>
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
                    value={signup.semester}
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
                    value={signup.fieldOfStudy}
                  />
                </div>
              </React.Fragment>}
            </div>
          </fieldset>
          <fieldset className="signup-form-section subjects-info">
            <h2>Subjects</h2>
            <div className="signup-form-section-fields subject-info">
              <div>
                <label htmlFor="science">Science</label>
                <select
                  multiple
                  name="science"
                  id="science"
                  style={{height: 'auto'}}
                  onChange={this.updateSubjects}
                  value={signup.subjects}
                >
                  <option>Math</option>
                  <option>Physics</option>
                  <option>Chemistry</option>
                  <option>Biology</option>
                  <option>Computer Science</option>
                </select>
              </div>
              <div>
                <label htmlFor="languages">Languages</label>
                <select
                  multiple
                  name="languages"
                  id="languages"
                  style={{height: 'auto'}}
                  onChange={this.updateSubjects}
                  value={signup.subjects}
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                  <option>Italian</option>
                  <option>Chinese</option>
                  <option>Japanese</option>
                  <option>Latin</option>
                </select>
              </div>
              <div>
                <label htmlFor="humanities">Humanities</label>
                <select
                  multiple
                  name="humanities"
                  id="humanities"
                  style={{height: 'auto'}}
                  onChange={this.updateSubjects}
                  value={signup.subjects}
                >
                  <option>History</option>
                  <option>Politics</option>
                  <option>Ethics</option>
                  <option>Social Studies</option>
                  <option>Philosophy</option>
                  <option>Economics</option>
                </select>
              </div>
              <div>
                <label htmlFor="other">Other</label>
                <select
                  multiple
                  name="other"
                  id="other"
                  style={{height: 'auto'}}
                  onChange={this.updateSubjects}
                  value={signup.subjects}
                >
                  <option>Physical Education</option>
                  <option>Music</option>
                  <option>Art</option>
                </select>
              </div>
            </div>
          </fieldset>
          <legend>Hold cmd/ctrl to toggle selections. Use drag or shift to select multiple subjects.</legend>
        </form>
        <div id="submit-sign-up-form">
          <button type="submit" onClick={this.submitForm}>Submit</button>
          <button type="reset" onClick={this.clearForm}>Clear Form</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    signup: state.signup,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateSignupForm: (data) => dispatch(updateSignupForm(data)),
  submitSignupForm: (data) => dispatch(submitSignupForm(data)),
  clearSignupForm: () => dispatch(clearSignupForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);