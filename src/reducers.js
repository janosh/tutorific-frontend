import {combineReducers} from 'redux';

const defaultAppState = {
  userSearches: 'tutors'
}

const tutors = (state = [], action) => {
  if (action.type === 'getTutors') return action.tutors;
  return state;
};

const students = (state = [], action) => {
  if (action.type === 'getStudents') return action.students;
  return state;
};

const appState = (state = defaultAppState, action) => {
  switch (action.type) {
  case 'changeUserSearch':
    return {
      ...state,
      userSearches: action.userSearches
    }
  default:
    return state;
  }
};

export default combineReducers({
  tutors,
  students,
  appState
});