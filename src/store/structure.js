import { combineReducers } from 'redux'
import { currentUser } from '../reducers/users'
import { products } from "../reducers/products"

export const structure = combineReducers({
  currentUser,
  products
});

