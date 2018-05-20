import initialState from './initialState';

export const currentUser = (state = initialState.user, action) => {
  switch (action.type) {
    case 'set_user_location':
    return {
      ...state,
      userLocation: action.userLocation
    }
    case 'toggle_user_logged_in':
    return {
      ...state,
      loggedIn: !state.loggedIn
    }
    case 'submit_login_data_success':
    return {
      ...state,
      ...action.data
    }
    default:
    return state;
  }
};