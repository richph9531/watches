import React from 'react';
import PropTypes from 'prop-types';
import classes from '../styles/ProductCard.module.css';

const ProductCard = props => (
  <div
    onClick={props.onProductSelection}
    className={props.isCurrentlySelected ? classes.ProductCardSelected : classes.ProductCard }>
    <img className={classes.WatchImage} src={props.imageUrl} alt={props.styleName}/>
  </div>
);
ProductCard.propTypes = {
  imageUrl: PropTypes.string,
  styleName: PropTypes.string,
  onProductSelection: PropTypes.func,
  isCurrentlySelected: PropTypes.bool,
};

export default ProductCard;
