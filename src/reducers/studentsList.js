import defaultAppState from './defaultState';

export const studentsList = (state = defaultAppState.studentsList, action) => {
  if (action.type === 'getStudentsSuccess') return action.data;
  return state;
};