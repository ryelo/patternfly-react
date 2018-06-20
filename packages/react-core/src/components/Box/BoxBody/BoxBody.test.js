import BoxBody from './BoxBody';
import React from 'react';
import { shallow } from 'enzyme';

test('Box has body', () => {
  const view = shallow(<BoxBody>Box Body</BoxBody>);
  expect(view).toMatchSnapshot();
});
