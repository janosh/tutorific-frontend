import {combineReducers} from 'redux';

import defaultAppState from './defaultState';

const user = (state = defaultAppState.user, action) => {
  switch (action.type) {
    case 'changeUserType':
    return {
      ...state,
      type: action.userType
    }
    case 'changeUserLocation':
    return {
      ...state,
      location: action.userLocation
    }
    default:
    return state;
  }
}

const signUpData = (state = defaultAppState.signUpData, action) => {
  switch (action.type) {
    case 'updateSignUpData':
    return {
      ...state,
      ...action.data
    }
    case 'updateSignUpDataAddress':
    return {
      ...state,
      address: {
        ...state.address,
        ...action.data
      }
    }
    default:
    return state;
  }
};

const tutorsList = (state = defaultAppState.tutorsList, action) => {
  if (action.type === 'getTutors') return action.tutors;
  return state;
};

const studentsList = (state = defaultAppState.studentsList, action) => {
  if (action.type === 'getStudents') return action.students;
  return state;
};

export default combineReducers({
  user,
  signUpData,
  tutorsList,
  studentsList
});