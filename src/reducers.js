import {combineReducers} from 'redux';

const emptyState = false;

const defaultAppState = {
  userType: 'student',
  signUpData: {
    // account info
    firstname: emptyState ? '' : 'Jack',
    lastname: emptyState ? '' : 'the Ripper',
    password: emptyState ? '' : 'abcdefgh',
    confirmPassword: emptyState ? '' : 'abcdefgh',
    email: emptyState ? '' : 'jack@theripper.com',
    // contact info
    phone: emptyState ? '' : '+34 4321 123 523',
    address: emptyState ? {} : {
      street: emptyState ? '' : 'Long Lane',
      number: emptyState ? '' : '42',
      zip: emptyState ? '' : '6942',
      country: emptyState ? '' : 'Wonderland',
    },
    // personal info
    birthday: emptyState ? '' : '2000-01-01',
    birthplace: emptyState ? '' : 'Honolulu',
    gender: emptyState ? '' : 'female',
    // student-specific data
    youthOrganization: emptyState ? '' : 'Unicef',
    grade: emptyState ? '' : '7',
    schoolType: emptyState ? '' : 'vocational',
    // tutor-specific data
    semester: emptyState ? '' : '5',
    fieldOfStudy: emptyState ? '' : 'Theoretical Physics',
    // subjects info
    subjects: emptyState ? [] : [{name: 'Physics', grade: 7},{name: 'Math', grade: 5},{name: 'English', grade: 8}],
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