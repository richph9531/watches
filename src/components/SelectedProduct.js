/* eslint-disable max-len */
import React from 'react';
import classes from '../styles/SelectedProduct.module.css';
import productData from '../data/productData.json';

const productDataArray = productData.colorOptions;

const SelectedProduct = productId => {
  const filtered = productDataArray.filter(row => row.id === productId);

  const TimeInHoursAndMinutes = () => {
    const hours = new Date().getHours() > 9 ? new Date().getHours() : `0${new Date().getHours()}`;
    const minutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : `0${new Date().getMinutes()}`;
    return `${hours}:${minutes}`;
  };

  return (
  <div className={classes.SelectedProduct}>
    <img className={classes.WatchImage}
      src={filtered[0].imageUrl}
      alt={filtered[0].styleName}
    />
    <div>
      <p className={classes.Time}>{TimeInHoursAndMinutes()}</p>
    </div>
    <div>
      <img className={classes.HeartRateImage} src="https://media.giphy.com/media/Vzf35rsf0Sv28Qkghf/giphy.gif"/>
      <p className={classes.HeartRateText}>78</p>
    </div>

  </div>
  );
};

export default SelectedProduct;
