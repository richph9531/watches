import React from 'react';
import PropTypes from 'prop-types';

import ProductHeader from './ProductHeader';
import Features from './Features';
import ProductCards from './ProductCards';
import BuyButton from './BuyButton';

const ProductDetails = props => (
    <div>
      <div><ProductHeader data={props}/></div>
      <div><ProductCards data={props}/></div>
      <div><Features data={props}/></div>
      <div><BuyButton data={props}/></div>
    </div>
);

ProductDetails.propTypes = {
  data: PropTypes.object,
  imageUrl: PropTypes.string,
  styleName: PropTypes.string,
  onProductSelection: PropTypes.func,
  isCurrentlySelected: PropTypes.bool,
  currentlySelectedStrapId: PropTypes.number,
};

export default ProductDetails;
