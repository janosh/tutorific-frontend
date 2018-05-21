export const getPersonList = (params) => ({
  type: 'get_person_list',
  params,
  http: {
    endpoint: 'persons',
  }
});

export const submitSignupForm = (data) => ({
  type: 'submit_signup_form',
  http: {
    endpoint: 'person',
    method: 'POST',
    body: data,
  }
});