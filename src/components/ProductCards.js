import React from 'react';
import PropTypes from 'prop-types';

import classes from '../styles/ProductCard.module.css';

const ProductCards = props => {
  const ProductCardsMap = props.data.data.colorOptions.map((item, pos) => (
    <img
      key={pos}
      src={`${process.env.PUBLIC_URL}/media/${item.imageUrl}`}
      alt={item.styleName}
      className={props.data.currentlySelectedStrapId === item.id ? classes.ProductCardSelected : classes.ProductCard}
      onClick={() => props.data.onProductSelection(pos)}
    />
  ));

  return (
    <div>
      <h3>Select Colour</h3>
        <div>{ ProductCardsMap }</div>
    </div>
  );
};

ProductCards.propTypes = {
  data: PropTypes.object,
  imageUrl: PropTypes.string,
  styleName: PropTypes.string,
  onProductSelection: PropTypes.func,
  isCurrentlySelected: PropTypes.bool,
  currentlySelectedStrapId: PropTypes.number,
};

export default ProductCards;
