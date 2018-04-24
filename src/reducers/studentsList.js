import defaultAppState from './defaultState';

export const studentsList = (state = defaultAppState.studentsList, action) => {
  if (action.type === 'getStudents') return action.students;
  return state;
};