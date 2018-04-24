import defaultAppState from './defaultState';

export const user = (state = defaultAppState.user, action) => {
  switch (action.type) {
    case 'changeUserLocation':
    return {
      ...state,
      location: action.userLocation
    }
    case 'toggleUserLoggedIn':
    return {
      ...state,
      loggedIn: !state.loggedIn
    }
    default:
    return state;
  }
}