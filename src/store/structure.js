import { combineReducers } from 'redux'
import { currentUser } from '../reducers/users'

export const structure = combineReducers({
  currentUser
});

