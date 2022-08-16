/* eslint-disable max-len */
import React, { Component } from 'react';

import productData from '../data/productData.json';

import ProductCard from './ProductCard';

const productDataArray = productData.colorOptions;

class ProductCards extends Component {
  state = {
    productDataArray,
  };

  onProductSelection = pos => {
    this.state.productDataArray.map(productObject => {
      const a = productObject;
      a.isCurrentlySelected = false;
      return a;
    });
    const updatedProductArray = this.state.productDataArray;
    const updatedProductObject = updatedProductArray[pos];
    updatedProductObject.isCurrentlySelected = true;
    updatedProductArray[pos] = updatedProductObject;
    this.setState({ productDataArray: updatedProductArray });
  };

  render() {
    const ProductCardsMap = this.state.productDataArray.map((item, pos) => (
    <ProductCard
      key={item.id}
      title={item.title}
      styleName={item.styleName}
      imageUrl={item.imageUrl}
      onProductSelection={() => this.onProductSelection(pos)}
      isCurrentlySelected={this.state.productDataArray[pos].isCurrentlySelected}
    />
    ));

    return (
      <div className='ProductCards'>{ ProductCardsMap }</div>
    );
  }
}

export default ProductCards;
