import React from 'react';
import {Field, FieldArray, reduxForm} from 'redux-form';
import Geosuggest from 'react-geosuggest';

import validate, {subjects} from './validate';
import * as normalize from './normalize';
import asyncValidate from './asyncValidate';
import prefill from './prefill';
import {submitSignupForm} from '../../redux/actions';
import './Signup.css';

const handleSelection = (input) => (select) => {
  if (!select || !select.location) return;
  input.onChange({
    label: select.label,
    placeId: select.placeId,
    lat: select.location.lat,
    lng: select.location.lng,
  })
}

const GeosuggestComp = (props) => {
  const {input, label, ...rest} = props;
  return <div>
    <label htmlFor={input.name}>{label}</label>
    <Geosuggest
      id={input.name} {...rest}
      initialValue={input.value.label}
      onSuggestSelect={handleSelection(input)}
    />
  </div>
}

const inputComp = ({input, label, meta: {touched, error, warning}, ...rest}) => {
  return <div>
    <label htmlFor={input.name}>{label}</label>
    <input id={input.name} {...input} {...rest}/>
    {error && touched && <span className="error">{error}</span>}
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

const submitForm = (values, dispatch) => {
  dispatch(submitSignupForm(values));
}

const SignupForm = ({handleSubmit, invalid, submitting, pristine, reset}) => {
  return <form id="redux-form" onSubmit={handleSubmit(submitForm)}>
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
    <Field name="location" component={GeosuggestComp} label="Address" placeholder="Infinite Loop 1, Cupertino"/>
    <Field name="birthDate" component={inputComp} label="Date of Birth" type="date"/>
    <Field name="birthPlace" component={inputComp} label="Place of Birth" placeholder="Paradise City"/>
    <Field name="semester" component={inputComp} label="Semester" placeholder="3" normalize={inRange(0, 50)}/>
    <Field name="fieldOfStudy" component={inputComp} label="Field of Study" placeholder="Physics"/>
    <div className="form-end"></div>
    <button type="submit" disabled={invalid || submitting}>Submit</button>
    <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
  </form>
}

export default reduxForm({
  form: 'signup',
  destroyOnUnmount: false,
  validate,
  initialValues: prefill,
  asyncValidate,
  asyncBlurFields: ['email'],
})(SignupForm);