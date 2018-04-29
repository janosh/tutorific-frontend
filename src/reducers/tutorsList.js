import defaultAppState from './defaultState';

export const tutorsList = (state = defaultAppState.tutorsList, action) => {
  if (action.type === 'getTutorsSuccess') return action.data;
  return state;
};