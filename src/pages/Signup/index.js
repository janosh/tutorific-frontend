import React from 'react';
import {Field, FieldArray, reduxForm} from 'redux-form';

import validate, {subjects} from './validate';
import * as normalize from './normalize';
import asyncValidate from './asyncValidate';
import prefill from './prefill';
import {submitSignupForm} from '../../redux/actions';

import Geosearch from '../../components/reduxForm/Geosearch';
import TextInput from '../../components/reduxForm/TextInput';
import TextInputArr from '../../components/reduxForm/TextInputArr';
import UserType from '../../components/reduxForm/UserType';
import './Signup.css';

const submitForm = (values, dispatch) => {
  dispatch(submitSignupForm(values));
}

const SignupForm = ({handleSubmit, invalid, submitting, pristine, reset}) => (
  <form id="signup-form" onSubmit={handleSubmit(submitForm)}>
    <datalist id="subjects">
      {subjects.map(el => <option key={el}>{el}</option>)}
    </datalist>
    <h1>Sign up today with Tutorific!</h1>
    <UserType/>
    <h2>Account</h2>
    <Field name="firstName" component={TextInput} label="First Name" placeholder="John"/>
    <Field name="lastName" component={TextInput} label="Last Name" placeholder="Doe"/>
    <Field name="email" component={TextInput} label="Email" type="email" placeholder="john@doe.com"/>
    <Field name="phone" component={TextInput} label="Phone" type="tel" normalize={normalize.phone} placeholder="+1 234 567 890"/>
    <Field name="password" component={TextInput} label="Password" type="password" placeholder={String.fromCharCode('0x2022').repeat(10)}/>
    <Field name="confirmPassword" component={TextInput} label="Confirm Password" type="password" placeholder={String.fromCharCode('0x2022').repeat(10)}/>
    <h2>Tutoring</h2>
    <Field name="minStudentGrade" component={TextInput} label="Minimum Student Grade" placeholder="1" normalize={normalize.inRange(0, 13)}/>
    <Field name="maxStudentGrade" component={TextInput} label="Maximum Student Grade" placeholder="13" normalize={normalize.inRange(0, 13)}/>
    <FieldArray name="subjects" component={TextInputArr} label="Subject" list="subjects" placeholder={subjects}/>
    <h2>Personal</h2>
    <Field name="location" component={Geosearch} label="Address" placeholder="Infinite Loop 1, Cupertino"/>
    <Field name="birthDate" component={TextInput} label="Date of Birth" type="date"/>
    <Field name="birthPlace" component={TextInput} label="Place of Birth" placeholder="Paradise City"/>
    <Field name="semester" component={TextInput} label="Semester" placeholder="3" normalize={normalize.inRange(0, 50)}/>
    <Field name="fieldOfStudy" component={TextInput} label="Field of Study" placeholder="Physics"/>
    <div className="form-end"></div>
    <button type="submit" disabled={invalid || submitting}>Submit</button>
    <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
  </form>
)

export default reduxForm({
  form: 'signup',
  destroyOnUnmount: false,
  validate,
  initialValues: prefill,
  asyncValidate,
  asyncBlurFields: ['email'],
})(SignupForm);