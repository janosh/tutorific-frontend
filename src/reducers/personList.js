

import defaultAppState from './defaultState';

export const personList = (state = defaultAppState.personList, action) => {
  if (action.type === 'get_person_list_success') return action.data;
  return state;
};