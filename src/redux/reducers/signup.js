import initialState from './initialState';

export const signup = (state = initialState.signup, action) => {
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
    case 'set_signup_location':
    return {
      ...state,
      location: action.location,
    }
    case 'clear_signup_form':
    return {
      ...initialState.signup
    }
    default:
    return state;
  }
};