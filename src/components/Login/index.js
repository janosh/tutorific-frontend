import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, formValues} from 'redux-form';

import validate from './validate';
import asyncValidate from './asyncValidate';
import initial from './initial';
import {submitLoginData, toggleModal} from '../../redux/actions';

import ButtonGroup from '../../components/inputs/ButtonGroup';
import TextInput from '../inputs/TextInput';
import Modal from '../Modal';
import './Login.css';

const submitForm = (values, dispatch) => {
  dispatch(submitLoginData(values));
}

const LoginForm = ({handleSubmit, invalid, submitting, pristine, reset, currentUser, dispatch, form}) => (
  <React.Fragment>
    <span onClick={() => dispatch(toggleModal('login'))}>
      {currentUser.firstName || 'Login'}
    </span>
    <Modal name="login" closeOnClickOutside>
      <form id="login-form" onSubmit={handleSubmit(submitForm)}>
        <Field name="email" component={TextInput} type="email" placeholder="Email"/>
        <Field name="password" component={TextInput} type="password" placeholder="Password"/>
        <div className="login-buttons">
          <Field
            name="userType"
            component={formValues({currentValue: 'userType'})(ButtonGroup)}
            btnValues={['student', 'tutor']}
            classNames={`${form}-userType`}
          />
          <button type="submit" disabled={invalid || submitting}>Login</button>
        </div>
      </form>
    </Modal>
  </React.Fragment>
);

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default reduxForm({
  form: 'login',
  destroyOnUnmount: false,
  validate,
  initialValues: initial,
  asyncValidate,
  asyncBlurFields: ['email'],
})(connect(mapStateToProps)(LoginForm));