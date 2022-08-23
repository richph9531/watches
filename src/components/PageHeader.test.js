import React from 'react';

import { render } from '@testing-library/react';
import PageHeader from './PageHeader';

test('Page header renders correctly', () => {
  const renderedElement = render(<PageHeader />);
  expect(renderedElement.baseElement).toMatchSnapshot();
});
