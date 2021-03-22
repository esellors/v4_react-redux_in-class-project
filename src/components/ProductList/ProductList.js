import React, { Component } from 'react'
import Product from './Product'
import Loading from './Loading'
import { connect } from 'react-redux'
import { getAllProducts } from '../../ducks/productsReducer'
import './productList.css'

class ProductList extends Component {
  componentDidMount() {
    this.props.getAllProducts()
  }

  render() {
    return (
      <div className="products-list">
        {this.props.isLoading ? (
          <Loading />
        ) : (
          this.props.products.map((product) => (
            <Product key={product.id} data={product} />
          ))
        )}
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return reduxState.products
}

export default connect(mapStateToProps, { getAllProducts })(ProductList)
