import React from 'react';
import PropTypes from 'prop-types';

import classes from '../styles/Features.module.css';

const Features = props => {
  const featuresArray = props.data.data.featureList;
  const featureList = featuresArray.map((item, pos) => (
    <button
      key={pos}
      className={pos === 0 ? classes.SelectedFeatureItem : classes.FeatureItem }
      onClick={() => props.data.onFeatureSelection(pos)}
    >
    {item}
    </button>
  ));

  return (
    <div>
      <h3 className={classes.FeaturesHeading}>Features</h3>
      <div>{ featureList }</div>
      <div>
        <button className={classes.BuyNow}>Buy Now</button>
      </div>
     </div>
  );
};

Features.propTypes = {
  data: PropTypes.object,
  onFeatureSelection: PropTypes.object,
};

export default Features;
