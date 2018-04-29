import defaultAppState from './defaultState';

export const signup = (state = defaultAppState.signup, action) => {
  switch (action.type) {
    case 'setSignupUserType':
    return {
      ...state,
      userType: action.userType
    }
    case 'updateSignupForm':
    return {
      ...state,
      ...action.data
    }
    case 'clearSignupForm':
    return {
      ...defaultAppState.signup
    }
    default:
    return state;
  }
};