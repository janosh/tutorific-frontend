import {createStore, applyMiddleware, compose} from 'redux';
import throttle from 'lodash/throttle';

import reducers from './reducers';
import backendCall from './middlewares/backendCall';
// import {loadState, saveState} from './localStorage';

// const persistedState = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  // persistedState,
  composeEnhancers(applyMiddleware(backendCall)),
);

// store.subscribe(throttle(() =>
//   saveState(store.getState()), 3000)
// );

export default store;