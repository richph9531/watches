import React from 'react';

import productData from '../data/productData.json';

import classes from '../styles/Features.module.css';

const featureListArray = productData.featureList;

const Features = () => {
  const featuresArray = JSON.stringify(featureListArray);
  return (
    <div>
      <h3 className={classes.FeaturesHeading}>Features</h3>
      <div>
        <button className={classes.SelectedFeatureItem}>Time</button>
        <button className={classes.FeatureItem}>Heart Rate</button>
      </div>
      <div>
        <button className={classes.BuyNow}>Buy Now</button>
      </div>
       { featuresArray }
    </div>
  );
};

export default Features;
