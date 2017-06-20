import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const middleware = process.env.NODE_ENV !== 'production' ?
  [thunk, logger] :
  [thunk];

export default function configureStore(initialState){
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
}