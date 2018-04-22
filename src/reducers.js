import {combineReducers} from 'redux';

const emptyState = false;

const defaultAppState = {
  userType: 'student',
  signUpData: {
    firstname: emptyState ? '' : 'Jack',
    lastname: emptyState ? '' : 'the Ripper',
    password: emptyState ? '' : 'abcdefgh',
    confirmPassword: emptyState ? '' : 'abcdefgh',
    email: emptyState ? '' : 'jack@theripper.com',
    phone: emptyState ? '' : '+34 4321 123 523',
    address: emptyState ? {} : {
      street: emptyState ? '' : 'Long Lane',
      number: emptyState ? '' : '42',
      zip: emptyState ? '' : '6942',
      country: emptyState ? '' : 'Wonderland',
    },
  }
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
    case 'changeUserType':
    return {
      ...state,
      userType: action.userType
    }
    case 'updateSignUpData':
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

export default combineReducers({
  tutors,
  students,
  appState
});