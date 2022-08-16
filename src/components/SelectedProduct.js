import React from 'react';
import classes from '../styles/SelectedProduct.module.css';
import productData from '../data/productData.json';

const productDataArray = productData.colorOptions;

const SelectedProduct = productId => {
  const filtered = productDataArray.filter(row => row.id === productId);
  return (
  <div className={classes.SelectedProduct}>
  <img className={classes.WatchImage}
  src={filtered[0].imageUrl}
  alt={filtered[0].styleName}
  />
  <img className={classes.HeartRate} src="https://media.giphy.com/media/Vzf35rsf0Sv28Qkghf/giphy.gif"/>
  </div>
  );
};

export default SelectedProduct;
