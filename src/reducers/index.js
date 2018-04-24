import {combineReducers} from 'redux';

import {tutorsList} from './tutorsList';
import {studentsList} from './studentsList';
import {app} from './app';
import {user} from './user';
import {signUpData} from './signUpData';

export default combineReducers({
  app,
  signUpData,
  studentsList,
  tutorsList,
  user,
});