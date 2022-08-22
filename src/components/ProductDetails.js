import React from 'react';
import PropTypes from 'prop-types';

import ProductHeader from './ProductHeader';

import Features from './Features';

import classes from '../styles/ProductCard.module.css';

const ProductDetails = props => {
  const ProductCards = props.data.colorOptions.map((item, pos) => (
    <img
      key={pos}
      src={item.imageUrl}
      alt={item.styleName}
      className={props.isCurrentlySelected ? classes.ProductCardSelected : classes.ProductCard }
      onClick={() => props.onProductSelection(pos)}
    />
  ));

  return (
    <div>
      <div><ProductHeader data={props.data}/></div>
      <div>
        <h3>Select Colour</h3>
        <div>{ ProductCards }</div>
      </div>
      < Features data={props}/>
    </div>
  );
};

ProductDetails.propTypes = {
  data: PropTypes.object,
  imageUrl: PropTypes.string,
  styleName: PropTypes.string,
  onProductSelection: PropTypes.func,
  isCurrentlySelected: PropTypes.bool,
};

export default ProductDetails;
