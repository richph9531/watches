/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

import productData from './data/productData.json';
import ProductCard from './components/ProductCard';
import PageHeader from './components/PageHeader';
import isArrayEmpty from './helpers/Utils';
import classes from './styles/App.module.css';

const pageTitle = productData.title;
const pageDescription = productData.description;
const productDataArray = productData.colorOptions;
// const featuresArray = productData.featureList;

class App extends Component {
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
    // eslint-disable-next-line max-len
    const ProductCards = isArrayEmpty(this.state.productDataArray) ? [] : this.state.productDataArray.map((item, pos) => (
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
    <div className='App'>
      <div> { PageHeader } </div>
      <div className={classes.PageTitle}>{ pageTitle }</div>
      <br></br>
      <div className={classes.PageDescription}>{ pageDescription }</div>
      <br></br>
      <div> { ProductCards } </div>
      <br></br>
    </div>
    );
  }
}

export default App;
