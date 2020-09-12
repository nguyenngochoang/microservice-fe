import { PRODUCT_ACTIONS } from './types'

export const setProducts = (products) => ({
  type: PRODUCT_ACTIONS.SET_PRODUCTS,
  payload: {
    products: products
  }
})