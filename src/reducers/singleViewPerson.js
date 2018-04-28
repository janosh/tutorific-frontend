import defaultAppState from './defaultState';

export const singleViewPerson = (state = defaultAppState.singleViewPerson, action) => {
  switch (action.type) {
    case 'setSingleViewPerson':
    return action.person;
    default:
    return state;
  }
};