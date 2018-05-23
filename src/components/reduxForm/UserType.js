
import React from 'react';
import {Field} from 'redux-form';

const UserType = () => {
  return <div className="person-type">
    <Field id="student"  name="userType" component="input" type="radio" value="student" checked/>
    <label htmlFor="student">Student</label>
    <Field id="tutor" name="userType" component="input" type="radio" value="tutor"/>
    <label htmlFor="tutor">Tutor</label>
  </div>
};

export default UserType;