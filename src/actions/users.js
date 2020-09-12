import { USER_ACTIONS } from './types'

export const setCurrentUser = (user) => ({
  type: USER_ACTIONS.SET_CURRENT_USER,
  payload: {
    currentUser: user
  }
})