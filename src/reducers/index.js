import {combineReducers} from 'redux';

import {currentUser} from './currentUser';
import {filters} from './filters';
import {login} from './login';
import {signup} from './signup';
import {singlePersonView} from './singlePersonView';
import {studentsList} from './studentsList';
import {tutorsList} from './tutorsList';

export default combineReducers({
  currentUser,
  filters,
  login,
  signup,
  singlePersonView,
  studentsList,
  tutorsList,
});