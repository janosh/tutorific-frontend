export const getTutors = (tutors) => ({
  type: 'getTutors',
  backendCall: {
    endpoint: 'tutors'
  }
});

export const getStudents = (students) => ({
  type: 'getStudents',
  backendCall: {
    endpoint: 'students'
  }
});

export const getConnections = (connections) => ({
  type: 'getConnections',
  backendCall: {
    endpoint: 'connections'
  }
});

export const submitSignupForm = (data) => ({
  type: 'submitSignupForm',
  backendCall: {
    endpoint: data.userType,
    method: 'POST',
    body: data,
  }
});