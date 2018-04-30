import defaultAppState from './defaultState';

export const signup = (state = defaultAppState.signup, action) => {
  switch (action.type) {
    case 'set_signup_user_type':
    return {
      ...state,
      userType: action.userType
    }
    case 'update_signup_form':
    return {
      ...state,
      ...action.data
    }
    case 'set_signup_location_choice':
    return {
      ...state,
      address: action.locationChoice,
    }
    case 'clear_signup_form':
    return {
      ...defaultAppState.signup
    }
    default:
    return state;
  }
};