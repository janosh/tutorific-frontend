

import initialState from './initialState';

export const personList = (state = initialState.personList, action) => {
  if (action.type === 'get_person_list_success' && action.data && Array.isArray(action.data))
    return action.data;
  return state;
};