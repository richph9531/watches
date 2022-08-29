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
    buyButtonJustClicked: false,
  };

  onProductSelection = pos => {
    const updatedCurrentlySelectedStrapId = this.state.productData.colorOptions[pos].id;
    const updatedBuyButtonClicked = false;
    this.setState({ currentlySelectedStrapId: updatedCurrentlySelectedStrapId });
    this.setState({ buyButtonJustClicked: updatedBuyButtonClicked });
  };

  onFeatureSelection = pos => {
    const updatedCurrentlySelectedFeature = this.state.productData.featureList[pos];
    const updatedBuyButtonClicked = false;
    this.setState({ currentlySelectedFeature: updatedCurrentlySelectedFeature });
    this.setState({ buyButtonJustClicked: updatedBuyButtonClicked });
  };

  onBuyButtonClick = () => {
    const updatedBuyButtonClicked = true;
    this.setState({ buyButtonJustClicked: updatedBuyButtonClicked });
  };

  shouldComponentUpdate(nextProps, nextState) {
    const currentState = JSON.stringify(this.state);
    const otherState = JSON.stringify(nextState);
    return currentState !== otherState;
  }

  render() {
    return (
      <div className='App'>
        <PageHeader/>
        <div className={classes.MainContainer}>
          <div>
            <SelectedProduct
              data={this.state.productData}
              currentlySelectedStrapId={this.state.currentlySelectedStrapId}
              currentlySelectedFeature={this.state.currentlySelectedFeature}
            />
          </div>
          <div className={classes.ProductData}>
            <ProductDetails
              data={this.state.productData}
              onProductSelection={this.onProductSelection}
              onFeatureSelection={this.onFeatureSelection}
              onBuyButtonClick={this.onBuyButtonClick}
              currentlySelectedStrapId={this.state.currentlySelectedStrapId}
              currentlySelectedFeature={this.state.currentlySelectedFeature}
              buyButtonJustClicked={this.state.buyButtonJustClicked}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
