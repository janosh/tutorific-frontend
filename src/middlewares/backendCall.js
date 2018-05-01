import { Base64 } from 'js-base64';

const querify = (obj) => (
  '?' + Object.keys(obj).map(prop => prop + '=' + obj[prop]).join('&')
);

export const backendCall = store => next => action => {
  if(!action.backendCall) return next(action);
  const {endpoint, method, body} = action.backendCall;

  const headers = {};
  if (store.getState().currentUser.token) {
    const token = store.getState().currentUser.token;
    headers['Authorization'] = 'Bearer ' + token;
  }
  if (action.type === 'submit_login_data') {
    const {email, password, userType} = action.data;
    const encodedLoginData = Base64.encode(`${email}:${password}:${userType}`)
    headers['Authorization'] = 'Basic ' + encodedLoginData;
  }
  if (method === 'POST' || method === 'PUT') {
    headers['content-type'] = 'application/json';
  }

  const query = action.type === 'get_person_list' ? querify(action.params) : '';

  console.log(process.env.REACT_APP_BACKEND_URL);

  fetch(process.env.REACT_APP_BACKEND_URL + endpoint + query, {
    method: method || 'GET',
    body: JSON.stringify(body),
    headers,
  })
  .then(res => res.json())
  .then(data => {
    store.dispatch({
      type: action.type + '_success',
      data,
    })
  })
  .catch(err => {
    console.error(err);
    store.dispatch({
      type: action.type + '_failure',
      err,
    })
  });
  next({
    ...action,
    type: action.type + '_pending'
  });
}

export default backendCall;