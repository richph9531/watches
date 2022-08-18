/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

import productData from './data/productData.json';

import PageHeader from './components/PageHeader';
import ProductHeader from './components/ProductHeader';
// import ProductCards from './components/ProductCards';
import ProductCard from './components/ProductCard';
import SelectedProduct from './components/SelectedProduct';
import Features from './components/Features';

import classes from './styles/App.module.css';

class App extends Component {
  state = {
    productData,
    productDataArray: productData.colorOptions,
  };

  onProductSelection = (pos, dataArray) => {
    dataArray.map(productObject => {
      const a = productObject;
      a.isCurrentlySelected = false;
      return a;
    });
    const updatedProductArray = dataArray;
    const updatedProductObject = updatedProductArray[pos];
    updatedProductObject.isCurrentlySelected = true;
    updatedProductArray[pos] = updatedProductObject;
    this.setState({ productDataArray: updatedProductArray });
  };

  render() {
    const dataArray = this.state.productDataArray;
    const ProductCards = dataArray.map((item, pos) => (
    <ProductCard
      key={pos}
      styleName={item.styleName}
      imageUrl={item.imageUrl}
      onProductSelection={() => this.onProductSelection(pos, dataArray)}
      isCurrentlySelected={dataArray[pos].isCurrentlySelected}
    />
    ));

    return (
      <div className='App'>
        <div><PageHeader/></div>
        <div className={classes.MainContainer}>
          <div><SelectedProduct data={productData}/></div>
          <div className={classes.ProductData}>
            <div><ProductHeader data={productData}/></div>
            <div>
            <h3 className={classes.SelectColourHeading}>Select Colour</h3>
              <div>{ ProductCards }</div>
            </div>
          < Features data={productData} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
