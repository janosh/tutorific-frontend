import {combineReducers} from 'redux';

import defaultAppState from './defaultState';

const user = (state = defaultAppState.user, action) => {
  switch (action.type) {
    case 'changeUserType':
    return {
      ...state,
      user: {
        ...state.user,
        type: action.userType
      }
    }
    case 'changeUserLocation':
    return {
      ...state,
      user: {
        ...state.user,
        location: action.userLocation
      }
    }
    default:
    return state;
  }
}

const signUpData = (state = defaultAppState.signUpData, action) => {
  switch (action.type) {
    case 'updateSignUpData':
    console.log(action.data);
    return {
      ...state,
      signUpData: {
        ...state.signUpData,
        ...action.data
      }
    }
    case 'updateSignUpDataAddress':
    return {
      ...state,
      signUpData: {
        ...state.signUpData,
        address: {
          ...state.signUpData.address,
          ...action.data
        }
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