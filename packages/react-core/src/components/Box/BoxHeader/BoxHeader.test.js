import BoxHeader from './BoxHeader';
import React from 'react';
import { shallow } from 'enzyme';

test('Box has Header', () => {
  const view = shallow(<BoxHeader>Box Footer</BoxHeader>);
  expect(view).toMatchSnapshot();
});
