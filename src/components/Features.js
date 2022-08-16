import React from 'react';

import productData from '../data/productData.json';

const featureListArray = productData.featureList;

const Features = () => {
  const abc = JSON.stringify(featureListArray);
  return (
    <div>
      Features
      <br></br>
      { abc }
    </div>
  );
};

export default Features;
