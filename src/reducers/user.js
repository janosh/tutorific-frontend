import defaultAppState from './defaultState';

export const user = (state = defaultAppState.user, action) => {
  switch (action.type) {
    case 'setUserLocation':
    return {
      ...state,
      location: {
        ...state.location,
        ...action.userLocation
      }
    }
    case 'setUserLocationChoice':
    return {
      ...state,
      locationChoice: action.userLocationChoice
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