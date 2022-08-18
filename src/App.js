import React, { Component } from 'react';

import productData from './data/productData.json';

import PageHeader from './components/PageHeader';
import ProductHeader from './components/ProductHeader';
import ProductCard from './components/ProductCard';
import SelectedProduct from './components/SelectedProduct';
import Features from './components/Features';

import classes from './styles/App.module.css';

class App extends Component {
  state = {
    productDataArray: productData.colorOptions,
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

  selectedProductId = () => {
    const products = this.state.productDataArray;
    const product = products.filter(row => row.isCurrentlySelected === true);
    const response = product.length === 0 ? 1 : product[0].id;
    return response;
  };

  render() {
    const ProductCards = this.state.productDataArray.map((item, pos) => (
    <ProductCard
      key={item.id}
      styleName={item.styleName}
      imageUrl={item.imageUrl}
      onProductSelection={() => this.onProductSelection(pos)}
      isCurrentlySelected={this.state.productDataArray[pos].isCurrentlySelected}
    />
    ));

    return (
      <div className='App'>
        <div>< PageHeader/> </div>
        <div className={classes.MainContainer}>
          <div>{ SelectedProduct(this.selectedProductId()) }</div>
          <div className={classes.ProductData}>
            <div><ProductHeader/></div>
            <div>
              <h3 className={classes.SelectColourHeading}>Select Colour</h3>
              <div>{ ProductCards }</div>
            </div>
          < Features />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
