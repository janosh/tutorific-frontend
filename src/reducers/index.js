import {combineReducers} from 'redux';

import {tutorsList} from './tutorsList';
import {studentsList} from './studentsList';
import {app} from './app';
import {currentUser} from './currentUser';
import {signUp} from './signUp';
import {singlePersonView} from './singlePersonView';

export default combineReducers({
  app,
  signUp,
  singlePersonView,
  studentsList,
  tutorsList,
  currentUser,
});