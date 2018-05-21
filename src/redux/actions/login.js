export const updateLoginData = (data) => ({
  type: 'update_login_data',
  data,
});

export const submitLoginData = (data) => ({
  type: 'submit_login_data',
  data,
  http: {
    endpoint: 'login',
  }
});

export const toggleUserLoggedIn = () => ({
  type: 'toggle_user_logged_in',
});

export const toggleLoginPanel = () => ({
  type: 'toggle_login_panel',
});