export const getTutors = (tutors) => ({
  type: 'getTutors',
  tutors
});

export const getStudents = (students) => ({
  type: 'getStudents',
  students
});

export const getConnections = (connections) => ({
  type: 'getConnections',
  connections
});

export const changeUserType = (userType) => ({
  type: 'changeUserType',
  userType
});

export const updateSignUpData = (subtype, data) => ({
  type: 'updateSignUpData' + subtype,
  data
});