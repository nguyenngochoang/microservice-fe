import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PRODUCTS_PATH } from "constants.js"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { setProducts } from "actions/products"
import _ from "lodash"
import { Link } from 'react-router-dom';
class CProducts extends Component {

  componentDidMount() {
    this.getAllProducts()
  }

  getAllProducts() {
    window.storeServiceAxios.get(PRODUCTS_PATH).then(response => {
      this.props.setProducts(response.data.products)
    }).catch(error => {
      console.log(error)
    })
  }

  renderProductCard(product) {
    if(!product)
      return null
    return (
      <Col xs={2}>
        <Card className="my-3">
          <Card.Img variant="top" src="https://vtv1.mediacdn.vn/zoom/640_400/2020/8/27/3oqmv4batkt3ujfdpzwxch-1200-80-15985225262641464510802.jpeg" />
          <Card.Body>
            <Card.Title> {product.name} </Card.Title>
            <Card.Text> {product.description} </Card.Text>
            <Link to={`/product_payment/${product.id}`}>
              <Button variant="primary">Buy</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    )
  }

  renderProducts() {
    const products = this.props.products
    return !_.isEmpty(products) && products.map(product => this.renderProductCard(product))
  }

  render() {
    return (
      <>
        <h1 className="text-center">All Products</h1>
        <Container fluid>
          <Row> {this.renderProducts()} </Row>
        </Container>
      </>
    )
  }
}


const mapStoreToProps = store => ({
  products: store.products
})

const mapDispatchToProps = {
  setProducts
}

export const Products = connect(
  mapStoreToProps,
  mapDispatchToProps
)(CProducts)

// export default
export default Products