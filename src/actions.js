export const changeUserType = (storePrefix, userType) => ({
  type: 'set' + storePrefix[0].toUpperCase() + storePrefix.substr(1) + 'UserType',
  userType,
});

export const updateLoginData = (data) => ({
  type: 'updateLoginData',
  data,
});

export const submitLoginData = (data) => ({
  type: 'submitLoginData',
  data,
  backendCall: {
    endpoint: 'login',
  }
});

export const setUserLocation = (userLocation) => ({
  type: 'setUserLocation',
  userLocation,
});

export const setLocationChoice = (storePrefix, locationChoice) => ({
  type: storePrefix + 'SetLocationChoice',
  storePrefix,
  locationChoice,
});

export const toggleUserLoggedIn = () => ({
  type: 'toggleUserLoggedIn',
});

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

export const updateSignupForm = (data) => ({
  type: 'updateSignupForm',
  data,
});

export const submitSignupForm = (data) => ({
  type: 'submitSignupForm',
  data,
  backendCall: {
    endpoint: data.userType,
    method: 'POST',
    body: data,
  }
});

export const clearSignupForm = () => ({
  type: 'clearSignupForm',
});

export const setSinglePersonView = (person) => ({
  type: 'setSinglePersonView',
  person,
});
