import defaultAppState from './defaultState';

export const filters = (state = defaultAppState.filters, action) => {
  switch (action.type) {
    case 'setFiltersUserType':
    return {
      ...state,
      userType: action.userType
    }
    default:
    return state;
  }
};