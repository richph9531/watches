import React from 'react';

import { render } from '@testing-library/react';
import ProductHeader from './ProductHeader';

test('Page header renders correctly', () => {
  const data = {
    title: 'Page header Title',
    description: 'Page header description',
  };
  const renderedElement = render(
  <ProductHeader
    data={data}
  />,
  );
  expect(renderedElement.baseElement).toMatchSnapshot();
});

test('Can render without title data', () => {
  const data = {
    description: 'Page header description',
  };
  const renderedElement = render(
  <ProductHeader
    data={data}
  />,
  );
  expect(renderedElement.baseElement).toMatchSnapshot();
});

test('Can render without description data', () => {
  const data = {
    title: 'Page header Title',
  };
  const renderedElement = render(
  <ProductHeader
    data={data}
  />,
  );
  expect(renderedElement.baseElement).toMatchSnapshot();
});

test('Can render without data', () => {
  const renderedElement = render(
  <ProductHeader
    data={{}}
  />,
  );
  expect(renderedElement.baseElement).toMatchSnapshot();
});
