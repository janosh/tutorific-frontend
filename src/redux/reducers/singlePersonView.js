import initialState from './initialState';

export const singlePersonView = (state = initialState.singlePersonView, action) => {
  switch (action.type) {
    case 'set_single_person_view':
    return action.person;
    default:
    return state;
  }
};