import defaultAppState from './defaultState';

export const app = (state = defaultAppState.app, action) => {
  switch (action.type) {
    case 'changeOneUserType':
    return {
      ...state,
      [action.storePrefix + 'UserType']: action.userType
    }
    case 'toggleLoginPanel':
    return {
      ...state,
      loginPanelVisible: !state.loginPanelVisible
    }
    case 'updateLoginData':
    return {
      ...state,
      ...action.data
    }
    case 'getTutorsRequest':
    return {
      ...state,
      loadingTutors: true
    }
    case 'getTutorsSuccess':
    case 'getTutorsFailure':
    return {
      ...state,
      loadingTutors: false
    }
    case 'getStudentsRequest':
    return {
      ...state,
      loadingStudents: true
    }
    case 'getStudentsSuccess':
    case 'getStudentsFailure':
    return {
      ...state,
      loadingStudents: false
    }
    default:
    return state;
  }
}