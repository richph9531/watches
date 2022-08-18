import React from 'react';
import classes from '../styles/ProductHeader.module.css';
import productData from '../data/productData.json';

const pageTitle = productData.title;
const pageDescription = productData.description;

const ProductHeader = () => (
    <div>
      <h1 className={classes.PageTitle}>{ pageTitle }</h1>
      <p className={classes.PageDescription}>{ pageDescription }</p>
    </div>
);

export default ProductHeader;
