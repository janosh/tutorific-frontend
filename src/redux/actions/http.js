export const getPersonList = (params, cb, errCb) => ({
  type: 'get_person_list',
  params,
  http: {
    cb,
    errCb,
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