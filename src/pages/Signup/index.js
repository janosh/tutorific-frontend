import React from 'react';
import {reduxForm, Field, FieldArray, FormSection, formValues} from 'redux-form';

import validate, {subjects, schools} from './validate';
import * as normalize from '../../components/inputs/normalize';
import asyncValidate from './asyncValidate';
import initial from './initial';

import {submitForm} from '../../redux/actions';
import ButtonGroup from '../../components/inputs/ButtonGroup';
import SelectInput from '../../components/inputs/SelectInput';
import TextInput from '../../components/inputs/TextInput';
import TextInputArray from '../../components/inputs/TextInputArray';
import Address from '../../components/inputs/Address';
import './Signup.css';

const SignupForm = ({
  handleSubmit, invalid, submitting, pristine, reset, dispatch, form, userType
}) => {
  return <form id="signup-form" onSubmit={handleSubmit(submitForm)}>
    <datalist id="subjects">
      {subjects.map(subject => <option key={subject}>{subject}</option>)}
    </datalist>
    <datalist id="schools">
      {schools.map(school => <option key={school}>{school + ' School'}</option>)}
    </datalist>
    <h1>Sign up for Tutorific!</h1>
    <Field
      name="userType"
      component={ButtonGroup}
      btnValues={['student', 'tutor']}
      classNames={`${form}-userType`}
      currentValue={userType}
      grayBg
    />
    <h2>Account</h2>
    <Field
      name="firstName"
      component={TextInput}
      label="First Name"
      placeholder="John"
    />
    <Field
      name="lastName"
      component={TextInput}
      label="Last Name"
      placeholder="Doe"
    />
    <Field
      name="email"
      component={TextInput}
      label="Email" type="email"
      placeholder="john@doe.com"
    />
    <Field
      name="phone"
      component={TextInput}
      label="Phone" type="tel"
      normalize={normalize.phone}
      placeholder="+49 123 4567 8901"
    />
    <Field
      name="password"
      component={TextInput}
      label="Password"
      type="password"
      placeholder={String.fromCharCode('0x2022').repeat(10)}
    />
    <Field
      name="confirmPassword"
      component={TextInput}
      label="Confirm Password"
      type="password"
      placeholder={String.fromCharCode('0x2022').repeat(10)}
    />
    <h2>Address</h2>
    <FormSection name="address">
      <Address placeholders/>
    </FormSection>
    <h2>Tutoring</h2>
    <FieldArray
      name="subjects"
      component={TextInputArray}
      label="Subject"
      list="subjects"
      placeholder={subjects}
    />
    {userType === 'student' && <React.Fragment>
      <Field
        name="grade"
        component={TextInput}
        label="Grade"
        placeholder="7"
        normalize={normalize.inRange(0, 13)}
      />
      <Field
        name="schoolType"
        component={SelectInput}
        label="Type of School"
        placeholder="Middle School"
      >
        {schools.map(school => <option key={school}>{school + ' School'}</option>)}
      </Field>
    </React.Fragment>}
    {userType === 'tutor' && <React.Fragment>
      <Field
        name="minStudentGrade"
        component={TextInput}
        label="Minimum Student Grade"
        placeholder="1"
        normalize={normalize.inRange(0, 13)}
      />
      <Field
        name="maxStudentGrade"
        component={TextInput}
        label="Maximum Student Grade"
        placeholder="13"
        normalize={normalize.inRange(0, 13)}
      />
    </React.Fragment>}
    <h2>Personal</h2>
    <Field
      label="Gender"
      name="gender"
      component={formValues({currentValue: 'gender'})(ButtonGroup)}
      btnValues={['male', 'female']}
      classNames={`${form}-gender`}
      grayBg
    />
    <Field
      name="birthDate"
      component={TextInput}
      label="Date of Birth" type="date"
    />
    {userType === 'student' &&
    <Field
      name="youthOrganization"
      component={TextInput}
      label="Youth Organization"
      placeholder="Unicef"
    />}
    {userType === 'tutor' && <React.Fragment>
      <Field
        name="semester"
        component={TextInput}
        label="Semester"
        placeholder="3"
        normalize={normalize.inRange(0, 50)}
      />
      <Field
        name="fieldOfStudy"
        component={TextInput}
        label="Field of Study"
        placeholder="Physics"
      />
    </React.Fragment>}
    <div className="form-end"></div>
    <button type="submit" disabled={invalid || submitting}>
      Submit
    </button>
    <button type="button" onClick={reset}
      disabled={pristine || submitting}
    >
      Clear Values
    </button>
  </form>
}

export default reduxForm({
  form: 'signup',
  destroyOnUnmount: false,
  validate,
  initialValues: initial,
  asyncValidate,
  asyncBlurFields: ['email'],
})(formValues('userType')(SignupForm));