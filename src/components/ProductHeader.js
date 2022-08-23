import React from 'react';
import PropTypes from 'prop-types';
import classes from '../styles/ProductHeader.module.css';

const ProductHeader = props => (
    <div>
      <h1 className={classes.PageTitle}>{props.data.title}</h1>
      <p className={classes.PageDescription}>{props.data.description}</p>
    </div>
);

ProductHeader.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ProductHeader;
