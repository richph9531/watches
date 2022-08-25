import React from 'react';

import { render } from '@testing-library/react';
import ProductDetails from './ProductDetails';

test.skip('Component renders correctly with Time selected', () => {
  const data = {
    data: {
      colorOptions: [
        {
          id: 1,
          styleName: 'Black Strap',
          imageUrl: 'BlackStrap.png',
        },
        {
          id: 2,
          styleName: 'Red Strap',
          imageUrl: 'RedStrap.png',
        },
      ],
    },
  };
  const renderedElement = render(<ProductDetails data={data}/>);
  expect(renderedElement.baseElement).toMatchSnapshot();
});

