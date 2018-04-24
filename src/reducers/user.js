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
    case 'setLocationChoice':
    if (action.storePrefix === 'user') {
      return {
        ...state,
        locationChoice: action.locationChoice
      }
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