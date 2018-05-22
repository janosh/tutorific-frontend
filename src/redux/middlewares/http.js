import { Base64 } from 'js-base64';

const querify = (obj) => {
  Object.keys(obj).forEach(key =>
    (!obj[key] || typeof obj[key] === 'object') && delete obj[key]
  );
  return '?' + Object.keys(obj).map(prop => prop + '=' + obj[prop]).join('&')
};

export const http = store => next => action => {

  if(!action.http) return next(action);

  const {endpoint, method, body} = action.http;

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

  const query = action.params ? querify(action.params) : '';

  fetch(process.env.REACT_APP_SERVER_URL + endpoint + query, {
    method: method || 'GET',
    body: JSON.stringify(body),
    headers,
  })
  .then(res => {
    if (!res.ok) throw new Error(`${res.statusText} sent to ${res.url}, response status: ${res.status}`);
    return res.json();
  })
  .then(res => console.log(res) || res)
  .then(data => {
    store.dispatch({
      type: action.type + '_success',
      data,
    })
    if (action.http.cb) action.http.cb(data);
  })
  .catch(err => {
    console.error(err);
    store.dispatch({
      type: action.type + '_failure',
      err,
    })
    if (action.http.errCb) action.http.errCb(err);
  });
  next({
    ...action,
    type: action.type + '_pending'
  });
}

export default http;