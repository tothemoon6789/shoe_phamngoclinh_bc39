import React, { Component } from 'react';
import ProductItem from './productitem';
import data from './data.json'

class ProductList extends Component {
  state = {
    product: data,
  }
  renderProduct = () => {
    const { product } = this.state;
    const {addCart, setDetail} = this.props;
    return product.map((item,index) => {
      return <div className='col-md-4 px-1' key={index}>
        <ProductItem product = {item} addCart={addCart} setDetail={setDetail}/>
      </div>
    })
  }
  render() {
    return (
      <>
        <div className='container'>
          <div className='row'>

            {this.renderProduct()}

          </div>
        </div>
      </>
    );
  }
}

export default ProductList;