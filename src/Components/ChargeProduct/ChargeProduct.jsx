import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PRODUCT_PATH, GET_CLIENT_TOKEN_PATH, CHECKOUT_PATH, PRODUCTS_PATH } from "constants.js"
import _ from "lodash"
import { setProduct } from "actions/products"
import DropIn from "braintree-web-drop-in-react";
import { Button } from 'react-bootstrap'
import "./ChargeProduct.scss"

class CChargeProduct extends Component {

  constructor() {
    super()
    this.state = {
      clientToken: ''
    }

    this.chargeProduct = this.chargeProduct.bind(this)
  }

  componentDidMount() {
    this.getProductAndBuildPaymentUI()
  }


  getProductAndBuildPaymentUI() {
    this.getProduct()
    this.getClientToken(this.props.currentUser.id)
  }

  getClientToken(userId) {
    window.storeServiceAxios.get(GET_CLIENT_TOKEN_PATH, {params: {user_id: userId}}).then(response => {
      this.setState({clientToken: response.data.token})
    }).catch(error => {
      console.log(error)
    })
  }

  getProduct() {
    const productId = this.props.match.params.id
    window.storeServiceAxios.get(PRODUCT_PATH(productId)).then(response => {
      this.props.setProduct(response.data.product)
    }).catch(error => {
      console.log(error)
    })
  }

  renderProductInfo(product) {
    return (
      <div className="product-information">
        <p>{`Product Name: ${product.name}`}</p>
        <p>{`Product Description: ${product.description}`}</p>
        <p>{`Price: ${product.price}`}</p>
      </div>
    )
  }

  chargeProduct() {
    this.instance.requestPaymentMethod((err, payload) => {
      const nonce = payload.nonce
      const transactions = {
        nonce: nonce,
        amount: this.props.product.price,
        device: navigator.userAgent
      }
      const user = {...this.props.currentUser, ...{nonce:nonce}}
      window.storeServiceAxios.post(CHECKOUT_PATH, {transactions: transactions, user: user}).then(response => {
        if(response.data.result.transaction) {
          alert("Thank you for shopping!")
        }
      }).catch(error => {
        console.log(error)
      })
    })
  }

  renderCardPayment() {
    if(!this.state.clientToken)
      return null
    return (
      <div className="payment-container">
        <DropIn options={{ authorization: this.state.clientToken, preselectVaultedPaymentMethod: true }}
                onInstance={(instance) => (this.instance = instance)}/>
        <Button variant="outline-success" onClick={this.chargeProduct}>Buy</Button>
      </div>
    )
  }

  render() {
    const product = this.props.product
    if(_.isEmpty(product))
      return null

    return (
      <div className="wrapper">
        {this.renderProductInfo(product)}
        {this.renderCardPayment()}
      </div>
    )
  }
}


const mapStoreToProps = store => ({
  product: store.product,
  currentUser: store.currentUser
})

const mapDispatchToProps = {
  setProduct
}

export const ChargeProduct = connect(
  mapStoreToProps,
  mapDispatchToProps
)(CChargeProduct)

// export default
export default ChargeProduct