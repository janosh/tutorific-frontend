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

export const toggleUserLoggedIn = () => ({
  type: 'toggleUserLoggedIn',
});