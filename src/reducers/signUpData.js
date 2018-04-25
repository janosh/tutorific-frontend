import defaultAppState from './defaultState';

export const signUpData = (state = defaultAppState.signUpData, action) => {
  switch (action.type) {
    case 'updateSignUpData':
    return {
      ...state,
      ...action.data
    }
    // update signUpData.address
    case 'setLocationChoice':
    if (action.storePrefix === 'signUpData') {
      return {
        ...state,
        address: action.locationChoice
      }
    }
    break;
    // TODO
    // case 'updateSignUpDataSubjects':
    // return {
    //   ...state,
    //   subjects: [
    //     ...state.subjects,
    //     ...action.data
    //   ]
    // }
    default:
    return state;
  }
};