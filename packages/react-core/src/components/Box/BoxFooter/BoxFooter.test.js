import BoxFooter from './BoxFooter';
import React from 'react';
import { shallow } from 'enzyme';

test('Box has Footer', () => {
  const view = shallow(<BoxFooter>Box Footer</BoxFooter>);
  expect(view).toMatchSnapshot();
});
