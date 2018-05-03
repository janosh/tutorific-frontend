import React from 'react';
import {Field, FieldArray, reduxForm} from 'redux-form';
import validator from 'validator';
import Geosuggest from 'react-geosuggest';

import './ReduxForm.css'

const validate = (values) => {
  const errors = {};
  if (!values.firstName) errors.firstName = 'Required';
  if (!values.lastName) errors.lastName = 'Required';
  if (!values.email) errors.email = 'Required';
  else if (!validator.isEmail(values.email)) errors.email = 'Invalid email';
  if (values.phone && !validator.isMobilePhone(values.phone, 'any', {strictMode: true})) errors.phone = 'Invalid: Supply full country code, e.g. +49 for Germany followed by a space';
  if (!values.password) errors.password = 'Required';
  else if (values.password.length < 6) errors.password = 'Password must be at least 6 characters long';
  else if (values.password.search(/[a-z]/) < 0) errors.password = 'Password must contain a lowercase character';
  else if(values.password.search(/[A-Z]/) < 0) errors.password = 'Password must contain an uppercase character';
  else if (values.password.search(/[0-9]/) < 0) errors.password = 'Password must contain a number';
  if (!values.confirmPassword) errors.confirmPassword = 'Required';
  else if (values.password !== values.confirmPassword) errors.confirmPassword = 'Passwords do not match';
  if (!values.address) errors.address = 'Required';
  else if (!values.address.label) errors.address = 'Please make a selection from the address suggestions';
  if (!values.gender) errors.gender = 'Required';
  if (!values.subjects || !values.subjects.length) {
    errors.subjects = {_error: 'Enter at least one subject'}
  } else {
    const subjectErrors = values.subjects.map(el => (subjects.includes(el) || el === '') ? '' : 'Invalid subject')
    if(subjectErrors.reduce((a,b) => a + b, '') !== '') errors.subjects = subjectErrors;
  }
  console.log(errors.subjects);
  return errors;
}

const handleSelection = (input) => (select) => {
  if (!select || !select.location) return;
  input.onChange({
    label: select.label,
    placeId: select.placeId,
    lat: select.location.lat,
    lng: select.location.lng,
  })
}

const GeosuggestComp = ({input, label, ...rest}) => (
  <div>
    <label htmlFor={input.name}>{label}</label>
    <Geosuggest
      initialValue={input.value.label}
      onSuggestSelect={handleSelection(input)}
      id={input.name} {...rest}
    />
  </div>
)

const inputComp = ({input, label, meta: {touched, error, warning}, ...rest}) => {
  return <div>
    <label htmlFor={input.name}>{label}</label>
    {error && touched && <span className="error">{error}</span>}
    <input id={input.name} {...input} {...rest}/>
  </div>
}

const inputComps = ({label, fields, list, placeholder}) => {
  if (!fields.length) fields.push();
  return fields.map((el, index) =>
    <Field key={el} name={el} component={inputComp}
      placeholder={placeholder[index]}
      label={`${label} ${index + 1}`} list={list}
      onClick={e => index === fields.length - 1 && fields.push('')}
      onBlur={e => !e.target.value && fields.remove(fields.length - 1)}
    />
  )
}

const phoneNormalizer = (val) => val.replace(/[^ +\d]/g, '').replace(/ {2}/g, ' ');
const inRange = (min, max) => (val) => {
  val = val.replace(/[^\d]/g, '').replace(/0{2}/g, '0');
  return (val < min && min) || (val > max && max) || val;
};

const subjects = ['Math', 'Physics', 'Chemistry', 'Biology', 'Computer Science',
  'English', 'Spanish', 'French', 'German', 'Italian', 'Chinese',
  'Japanese', 'Latin', 'History', 'Politics', 'Ethics', 'Social Studies',
  'Philosophy', 'Economics', 'Physical Education', 'Music', 'Art'];

const SignupForm = ({handleSubmit, invalid, submitting, pristine, reset}) => {
  return <form id="redux-form" onSubmit={handleSubmit}>
    <datalist id="subjects">
      {subjects.map(el => <option key={el}>{el}</option>)}
    </datalist>
    <h1>Sign up today with Tutorific!</h1>
    <h2>Account</h2>
    <Field name="firstName" component={inputComp} label="First Name" placeholder="John"/>
    <Field name="lastName" component={inputComp} label="Last Name" placeholder="Doe"/>
    <Field name="email" component={inputComp} label="Email" type="email" placeholder="john@doe.com"/>
    <Field name="phone" component={inputComp} label="Phone" type="tel" normalize={phoneNormalizer} placeholder="+1 234 567 890"/>
    <Field name="password" component={inputComp} label="Password" type="password" placeholder={String.fromCharCode('0x2022').repeat(10)}/>
    <Field name="confirmPassword" component={inputComp} label="Confirm Password" type="password" placeholder={String.fromCharCode('0x2022').repeat(10)}/>
    <h2>Tutoring</h2>
    <Field name="minStudentGrade" component={inputComp} label="Minimum Student Grade" placeholder="1" normalize={inRange(0, 13)}/>
    <Field name="maxStudentGrade" component={inputComp} label="Maximum Student Grade" placeholder="13" normalize={inRange(0, 13)}/>
    <FieldArray name="subjects" component={inputComps} label="Subject" list="subjects" placeholder={subjects}/>
    <h2>Personal</h2>
    <Field name="address" component={GeosuggestComp} label="Address" placeholder="Infinite Loop 1, Cupertino"/>
    <Field name="birthDate" component={inputComp} label="Date of Birth" type="date"/>
    <Field name="birthPlace" component={inputComp} label="Place of Birth" placeholder="Paradise City"/>
    <Field name="semester" component={inputComp} label="Semester" placeholder="3" normalize={[inRange(0, 50), inRange(0, 40)]}/>
    <Field name="fieldOfStufy" component={inputComp} label="Field of Study" placeholder="Physics"/>
    <div className="form-end"></div>
    <button type="submit" disabled={invalid || submitting}>Submit</button>
    <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
  </form>
}

export default reduxForm({form: 'signup', destroyOnUnmount: false, validate})(SignupForm);