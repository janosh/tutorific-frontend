import defaultAppState from './defaultState';

export const singlePersonView = (state = defaultAppState.singlePersonView, action) => {
  switch (action.type) {
    case 'setSinglePersonView':
    return action.person;
    default:
    return state;
  }
};