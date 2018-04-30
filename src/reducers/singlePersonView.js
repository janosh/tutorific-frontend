import defaultAppState from './defaultState';

export const singlePersonView = (state = defaultAppState.singlePersonView, action) => {
  switch (action.type) {
    case 'set_single_person_view':
    return action.person;
    default:
    return state;
  }
};