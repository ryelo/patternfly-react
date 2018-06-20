import Box from './Box';
import React from 'react';
import { shallow } from 'enzyme';

test('Box', () => {
  const view = shallow(<Box />);
  expect(view).toMatchSnapshot();
});
