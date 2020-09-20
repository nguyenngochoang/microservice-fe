import { PRODUCT_ACTIONS } from '../actions/types'

export const products = (state = {}, action) => {
  switch (action.type){
    case PRODUCT_ACTIONS.SET_PRODUCTS:
      return action.payload.products
    default:
      return state
  }
}
export const product = (state = {}, action) => {
  switch (action.type){
    case PRODUCT_ACTIONS.SET_PRODUCT:
      return action.payload.product
    default:
      return state
  }
}
