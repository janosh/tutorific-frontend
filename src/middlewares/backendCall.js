import { Base64 } from 'js-base64';

import config from '../config';

export const backendCall = store => next => action => {
  if(!action.backendCall) return next(action);
  const {endpoint, method, body} = action.backendCall;

  const headers = {};
  if (store.getState().currentUser.token) {
    const token = store.getState().currentUser.token;
    headers['Authorization'] = 'Bearer ' + token;
  } else if (action.type === 'submit_login_data') {
    const {email, password, userType} = action.data;
    const encodedLoginData = Base64.encode(`${email}:${password}:${userType}`)
    headers['Authorization'] = 'Basic ' + encodedLoginData;
  }
  if (method === 'POST' || method === 'PUT') {
    headers['content-type'] = 'application/json';
  }

  fetch(config.backendUrl + endpoint, {
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