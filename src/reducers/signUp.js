import defaultAppState from './defaultState';

export const signUp = (state = defaultAppState.signUpData, action) => {
  switch (action.type) {
    case 'updateSignUp':
    return {
      ...state,
      ...action.data
    }
    case 'clearSignUpForm':
    return {
      ...defaultAppState.signUpData
    }
    default:
    return state;
  }
};