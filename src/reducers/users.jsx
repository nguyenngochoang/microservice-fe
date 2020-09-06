import { USER_ACTIONS } from '../actions/types'

export const currentUser = (state = {}, action) => {
  switch (action.type){
    case USER_ACTIONS.SET_CURRENT_USER:
      return action.payload.currentUser
    default:
      return state
  }
}