import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { structure } from "./structure"
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'

const middleware = applyMiddleware(thunk, createLogger());

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(structure, composeEnhancers(middleware))