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

export const changePersonType = (personType) => ({
  type: 'changePersonType',
  personType
});