import defaultAppState from './defaultState';

export const studentsList = (state = defaultAppState.studentsList, action) => {
  if (action.type === 'get_students_success') return action.data;
  return state;
};