export const getPersonList = (params) => ({
  type: 'get_person_list',
  params,
  backendCall: {
    endpoint: params.userType + 's',
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