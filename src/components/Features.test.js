import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react';
import Features from './Features';

// const onClick = jest.fn();

test('Component renders correctly with Time selected', () => {
  const data = {
    data: {
      featureList: ['Time', 'Heart Rate'],
    },
    currentlySelectedFeature: 'Time',
  };
  const renderedElement = render(<Features data={data}/>);
  expect(renderedElement.baseElement).toMatchSnapshot();
});

test('Component renders correctly with Heart Rate selected', () => {
  const data = {
    data: {
      featureList: ['Time', 'Heart Rate'],
    },
    currentlySelectedFeature: 'Heart Rate',
  };
  const renderedElement = render(<Features data={data}/>);
  expect(renderedElement.baseElement).toMatchSnapshot();
});

test('Component renders correctly with an invalid value selected', () => {
  const data = {
    data: {
      featureList: ['Time', 'Heart Rate'],
    },
    currentlySelectedFeature: 'INVALID',
  };
  const renderedElement = render(<Features data={data}/>);
  expect(renderedElement.baseElement).toMatchSnapshot();
});

test('Component renders correctly with more values in the array', () => {
  const data = {
    data: {
      featureList: ['Time', 'Heart Rate', 'GPS'],
    },
    currentlySelectedFeature: 'GPS',
  };
  const renderedElement = render(<Features data={data}/>);
  expect(renderedElement.baseElement).toMatchSnapshot();
});

test.skip('Component can be clicked', () => {
  const data = {
    data: {
      featureList: ['Time', 'Heart Rate'],
    },
    currentlySelectedFeature: 'Time',
  };

  render(<Features data={data}/>);
  const button = screen.getByText('Time');
  fireEvent.click(button);
});

