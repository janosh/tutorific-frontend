import defaultAppState from './defaultState';

export const signUpData = (state = defaultAppState.signUpData, action) => {
  switch (action.type) {
    case 'updateSignUpData':
    return {
      ...state,
      ...action.data
    }
    // update signUpData.address
    case 'signUpDataStLocationChoice':
    return {
      ...state,
      address: action.locationChoice
    }
    case 'updateSignUpDataSubjects':
    return {
      ...state,
      subjects: action.data
    }
    default:
    return state;
  }
};