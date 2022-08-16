import React from 'react';
import classes from '../styles/SelectedProduct.module.css';
import productData from '../data/productData.json';

const productDataArray = productData.colorOptions;

const SelectedProduct = productId => {
  const filtered = productDataArray.filter(row => row.id === productId);
  return (
  <img
  className={classes.WatchImage}
  src={filtered[0].imageUrl}
  alt={filtered[0].styleName}
  />
  );
};

export default SelectedProduct;
