import { PRODUCT_ACTIONS } from './types'

export const setProducts = (products) => ({
  type: PRODUCT_ACTIONS.SET_PRODUCTS,
  payload: {
    products: products
  }
})

export const setProduct = (product) => ({
  type: PRODUCT_ACTIONS.SET_PRODUCT,
  payload: {
    product: product
  }
})