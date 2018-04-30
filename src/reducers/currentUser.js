import defaultAppState from './defaultState';

export const currentUser= (state = defaultAppState.user, action) => {
  switch (action.type) {
    case 'set_user_location':
    return {
      ...state,
      location: {
        ...state.location,
        ...action.userLocation
      }
    }
    case 'toggle_user_logged_in':
    return {
      ...state,
      loggedIn: !state.loggedIn
    }
    default:
    return state;
  }
};