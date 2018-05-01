import {combineReducers} from 'redux';

import {currentUser} from './currentUser';
import {filters} from './filters';
import {login} from './login';
import {signup} from './signup';
import {singlePersonView} from './singlePersonView';
import {personList} from './personList';

export default combineReducers({
  currentUser,
  filters,
  login,
  signup,
  singlePersonView,
  personList,
});