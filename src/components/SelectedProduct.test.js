import React from 'react';

import { render } from '@testing-library/react';
import SelectedProduct from './SelectedProduct';

test('Component renders correctly with Time selected and a valid strap colour', () => {
  const data = {
    data: {
      colorOptions: [
        { id: 1, styleName: 'Black Strap', imageUrl: 'BlackStrap.png' },
        { id: 2, styleName: 'Red Strap', imageUrl: 'RedStrap.png' },
      ],
    },
    currentlySelectedStrapId: 1,
    currentlySelectedFeature: 'Time',
  };
  const renderedElement = render(<SelectedProduct data={data.data}/>);
  expect(renderedElement.baseElement).toMatchSnapshot();
});

test('Component renders correctly with Heart Rate selected and a valid strap colour', () => {
  const data = {
    data: {
      colorOptions: [
        { id: 1, styleName: 'Black Strap', imageUrl: 'BlackStrap.png' },
        { id: 2, styleName: 'Red Strap', imageUrl: 'RedStrap.png' },
      ],
    },
    currentlySelectedStrapId: 2,
    currentlySelectedFeature: 'HeartRate',
  };
  const renderedElement = render(<SelectedProduct data={data.data}/>);
  expect(renderedElement.baseElement).toMatchSnapshot();
});

test('Component renders correctly with Heart Rate selected and an invalid strap colour', () => {
  const data = {
    data: {
      colorOptions: [
        { id: 1, styleName: 'Black Strap', imageUrl: 'BlackStrap.png' },
        { id: 2, styleName: 'Red Strap', imageUrl: 'RedStrap.png' },
      ],
    },
    currentlySelectedStrapId: 3,
    currentlySelectedFeature: 'HeartRate',
  };
  const renderedElement = render(<SelectedProduct data={data.data}/>);
  expect(renderedElement.baseElement).toMatchSnapshot();
});
