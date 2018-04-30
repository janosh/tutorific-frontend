export const getTutors = (tutors) => ({
  type: 'get_tutors',
  backendCall: {
    endpoint: 'tutors'
  }
});

export const getStudents = (students) => ({
  type: 'get_students',
  backendCall: {
    endpoint: 'students'
  }
});

export const getConnections = (connections) => ({
  type: 'get_connections',
  backendCall: {
    endpoint: 'connections'
  }
});

export const submitSignupForm = (data) => ({
  type: 'submit_signup_form',
  backendCall: {
    endpoint: data.userType,
    method: 'POST',
    body: data,
  }
});