import defaultAppState from './defaultState';

export const signUpData = (state = defaultAppState.signUpData, action) => {
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
    // TODO
    // case 'updateSignUpDataSubjects':
    // return {
    //   ...state,
    //   subjects: {
    //     ...state.address,
    //     ...action.data
    //   }
    // }
    default:
    return state;
  }
};