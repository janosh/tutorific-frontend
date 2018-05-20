import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
// import throttle from 'lodash/throttle';

import * as reducers from './reducers';
import backendCall from './middlewares/backendCall';
// import {loadState, saveState} from './localStorage';

const configureStore = () => {
  // const persistedState = loadState();

  const reducer = combineReducers({
    form: formReducer,
    ...reducers,
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducer,
    // persistedState,
    composeEnhancers(applyMiddleware(backendCall)),
  );

  // store.subscribe(throttle(() =>
  //   saveState(store.getState()), 3000)
  // );

  return store;
}

export default configureStore;