import defaultAppState from './defaultState';

export const filters = (state = defaultAppState.filters, action) => {
  switch (action.type) {
    case 'update_filters':
    return {
      ...state,
      ...action.data
    }
    case 'set_filters_user_type':
    return {
      ...state,
      userType: action.userType
    }
    case 'set_user_location':
    return {
      ...state,
      userLocation: action.userLocation
    }
    case 'set_filters_location_choice':
    return {
      ...state,
      locationChoice: action.locationChoice,
    }
    default:
    return state;
  }
};