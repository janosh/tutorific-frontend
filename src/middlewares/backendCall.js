import config from '../config';

export const backendCall = store => next => action => {
  if(!action.backendCall) return next(action);
  const {endpoint, method, body} = action.backendCall;

  const headers = {};
  if (store.getState().currentUser.token) {
    const token = store.getState().currentUser.token;
    headers['Authorization'] = 'Bearer ' + token;
  }

  fetch(config.backendUrl + endpoint, {
    method: method || 'GET',
    body: JSON.stringify(body),
    headers,
  })
  .then(res => res.json())
  .then(data => {
    store.dispatch({
      type: action.type + 'Success',
      data,
    })
  })
  .catch(error => {
    store.dispatch({
      type: action.type + 'Failure',
      error,
    })
  });
  next({
    ...action,
    type: action.type + 'Pending'
  });
}

export default backendCall;