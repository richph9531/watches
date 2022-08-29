import React from 'react';
import PropTypes from 'prop-types';

import classes from '../styles/Features.module.css';

const Features = props => {
  const featuresArray = props.data.data.featureList;
  const featureList = featuresArray.map((item, pos) => (
    <button
      key={pos}
      className={props.data.currentlySelectedFeature === item ? classes.SelectedFeatureItem : classes.FeatureItem }
      onClick={() => props.data.onFeatureSelection(pos)}
    >
    {item}
    </button>
  ));

  return (
    <div>
      <h3 className={classes.FeaturesHeading}>Features</h3>
      <div>{ featureList }</div>
     </div>
  );
};

Features.propTypes = {
  data: PropTypes.object,
  onFeatureSelection: PropTypes.object,
};

export default Features;
