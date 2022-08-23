import React from 'react';
import PropTypes from 'prop-types';

import classes from '../styles/SelectedProduct.module.css';

const SelectedProduct = props => {
  const selectedWatchStrap = () => {
    const products = props.data.colorOptions;
    const product = products.filter(row => row.id === props.currentlySelectedStrapId);
    const response = product.length === 0 ? 1 : product[0].id;
    const filteredArray = products.filter(row => row.id === response);
    return filteredArray[0];
  };

  const TimeInHoursAndMinutes = () => {
    const hours = new Date().getHours() > 9 ? new Date().getHours() : `0${new Date().getHours()}`;
    const minutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : `0${new Date().getMinutes()}`;
    return `${hours}:${minutes}`;
  };

  return (
  <div className={classes.SelectedProduct}>
    <img
      className={classes.WatchImage}
      src={`${process.env.PUBLIC_URL}/media/${selectedWatchStrap().imageUrl}`}
      alt={selectedWatchStrap().styleName}
    />
    { props.currentlySelectedFeature === 'Time'
      ? <div>
      <p className={classes.Time}>{TimeInHoursAndMinutes()}</p>
    </div>
      : <div>
      <img
        className={classes.HeartRateImage}
        src={`${process.env.PUBLIC_URL}/media/HeartRate.gif`}
      />
      <p className={classes.HeartRateText}>78</p>
    </div>
    }
  </div>
  );
};

SelectedProduct.propTypes = {
  data: PropTypes.object,
  showTimeOnWatch: PropTypes.bool,
  currentlySelectedStrapId: PropTypes.number,
  currentlySelectedFeature: PropTypes.string,
};

export default SelectedProduct;
