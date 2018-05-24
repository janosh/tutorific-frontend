import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
// import throttle from 'lodash/throttle';

import * as reducers from './reducers';
import http from './middlewares/http';
// import {loadState, saveState} from './localStorage';

// const persistedState = loadState();

const reducer = combineReducers({
  form: formReducer,
  ...reducers,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  // persistedState,
  composeEnhancers(applyMiddleware(http)),
);

// store.subscribe(throttle(() =>
//   saveState(store.getState()), 3000)
// );

export default store;