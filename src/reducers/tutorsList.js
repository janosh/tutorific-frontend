import defaultAppState from './defaultState';

export const tutorsList = (state = defaultAppState.tutorsList, action) => {
  if (action.type === 'getTutors') return action.tutors;
  return state;
};