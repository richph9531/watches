import React from 'react';
import ProductCard from '../components/ProductCard';

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
};

const Template = args => <ProductCard {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  id: 1,
  styleName: 'Black Strap',
  imageUrl: 'https://imgur.com/iOeUBV7.png',
  isCurrentlySelected: false,
};
