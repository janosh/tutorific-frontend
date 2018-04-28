export const changeUserType = (storePrefix, userType) => ({
  type: 'changeOneUserType',
  storePrefix,
  userType
});

export const updateLoginData = (data) => ({
  type: 'updateLoginData',
  data
});

export const submitLoginData = (data) => ({
  type: 'submitLoginData',
  data,
  backendCall: {
    endpoint: '/login',
  }
});

export const setUserLocation = (userLocation) => ({
  type: 'setUserLocation',
  userLocation
});

export const setLocationChoice = (storePrefix, locationChoice) => ({
  type: storePrefix + 'SetLocationChoice',
  storePrefix,
  locationChoice,
});

export const toggleUserLoggedIn = () => ({
  type: 'toggleUserLoggedIn'
});

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

export const updateSignUpData = (subtype, data) => ({
  type: 'updateSignUpData' + subtype,
  data
});

export const setSingleViewPerson = (person) => ({
  type: 'setSingleViewPerson',
  person
});
