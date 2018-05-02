export const getPersonList = (params) => ({
  type: 'get_person_list',
  params,
  backendCall: {
    endpoint: 'persons',
  }
});

export const submitSignupForm = (data) => ({
  type: 'submit_signup_form',
  backendCall: {
    endpoint: 'person',
    method: 'POST',
    body: data,
  }
});