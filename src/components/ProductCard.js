import React from 'react';
import PropTypes from 'prop-types';
import classes from '../styles/ProductCard.module.css';

const ProductCard = props => (
    <img
      onClick={props.onProductSelection}
      src={props.imageUrl} alt={props.styleName}
      className={props.isCurrentlySelected ? classes.ProductCardSelected : classes.ProductCard }
    />
);

ProductCard.propTypes = {
  imageUrl: PropTypes.string,
  styleName: PropTypes.string,
  onProductSelection: PropTypes.func,
  isCurrentlySelected: PropTypes.bool,
};

export default ProductCard;
