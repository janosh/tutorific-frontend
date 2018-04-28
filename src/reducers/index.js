import {combineReducers} from 'redux';

import {tutorsList} from './tutorsList';
import {studentsList} from './studentsList';
import {app} from './app';
import {currentUser} from './currentUser';
import {signUpData} from './signUpData';
import {singleViewPerson} from './singleViewPerson';

export default combineReducers({
  app,
  signUpData,
  singleViewPerson,
  studentsList,
  tutorsList,
  currentUser,
});