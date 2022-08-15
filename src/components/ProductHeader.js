import React from 'react';
import classes from '../styles/ProductHeader.module.css';
import productData from '../data/productData.json';

const pageTitle = productData.title;
const pageDescription = productData.description;

const ProductHeader = (
    <div>
    <div className={classes.PageTitle}>{ pageTitle }</div>
    <br></br>
    <div className={classes.PageDescription}>{ pageDescription }</div>
    <br></br>
    </div>
);

export default ProductHeader;
