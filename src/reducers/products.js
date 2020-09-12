import { PRODUCT_ACTIONS } from '../actions/types'

export const products = (state = {}, action) => {
  switch (action.type){
    case PRODUCT_ACTIONS.SET_PRODUCTS:
      return action.payload.products
    default:
      return state
  }
}