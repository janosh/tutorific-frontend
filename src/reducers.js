import {combineReducers} from 'redux';

const tutors = (state = [], action) => {
  if (action.type === 'getTutors') return action.tutors;
  return state;
};

const students = (state = [], action) => {
  if (action.type === 'getStudents') return action.students;
  return state;
};

const appState = (state = [], action) => {
  switch (action.type) {
  case 'changePersonType':
    return {
      ...state,
      personType: action.personType
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