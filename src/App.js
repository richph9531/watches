import React, { Component } from 'react';

import productData from './data/productData.json';

import PageHeader from './components/PageHeader';
import SelectedProduct from './components/SelectedProduct';
import ProductDetails from './components/ProductDetails';

import classes from './styles/App.module.css';

class App extends Component {
  state = {
    productData,
    currentlySelectedFeature: 'Time',
    currentlySelectedStrapId: 1,
  };

  onProductSelection = pos => {
    const updatedCurrentlySelectedStrapId = this.state.productData.colorOptions[pos].id;
    this.setState({ currentlySelectedStrapId: updatedCurrentlySelectedStrapId });
  };

  onFeatureSelection = pos => {
    const updatedCurrentlySelectedFeature = this.state.productData.featureList[pos];
    this.setState({ currentlySelectedFeature: updatedCurrentlySelectedFeature });
  };

  render() {
    return (
      <div className='App'>
        <PageHeader/>
        <div className={classes.MainContainer}>
          <div>
            <SelectedProduct
              data={this.state.productData}
              showTimeOnWatch={this.state.showTimeOnWatch}
              currentlySelectedStrapId={this.state.currentlySelectedStrapId}
              currentlySelectedFeature={this.state.currentlySelectedFeature}
            />
          </div>
          <div className={classes.ProductData}>
            <ProductDetails
              data={this.state.productData}
              onProductSelection={this.onProductSelection}
              onFeatureSelection={this.onFeatureSelection}
              currentlySelectedStrapId={this.state.currentlySelectedStrapId}
              currentlySelectedFeature={this.state.currentlySelectedFeature}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
