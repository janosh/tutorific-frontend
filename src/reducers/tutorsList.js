import defaultAppState from './defaultState';

export const tutorsList = (state = defaultAppState.tutorsList, action) => {
  if (action.type === 'get_tutors_success') return action.data;
  return state;
};