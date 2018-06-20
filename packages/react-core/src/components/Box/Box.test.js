import Box from './Box/Box';
import BoxHeader from './BoxHeader/BoxHeader';
import BoxBody from './BoxBody/BoxBody';
import BoxFooter from './BoxFooter/BoxFooter';
import React from 'react';
import { shallow } from 'enzyme';

test('Regular Box', () => {
  const view = shallow(<Box />);
  expect(view).toMatchSnapshot();
});

test('Box with Header, Body, Footer', () => {
  const view = shallow(
    <Box>
      <BoxHeader> Box Header </BoxHeader>
      <BoxBody> Box Body </BoxBody>
      <BoxFooter> Box Footer </BoxFooter>
    </Box>
  );
  expect(view).toMatchSnapshot();
});

test('Box with no header', () => {
  const view = shallow(
    <Box>
      <BoxBody> This box has no header </BoxBody>
      <BoxFooter> Box Footer </BoxFooter>
    </Box>
  );
  expect(view).toMatchSnapshot();
});

test('Box with no footer', () => {
  const view = shallow(
    <Box>
      <BoxHeader> Box Header </BoxHeader>
      <BoxBody> Box Body </BoxBody>
    </Box>
  );
  expect(view).toMatchSnapshot();
});

test('Box with only content', () => {
  const view = shallow(
    <Box>
      <BoxBody> Box Body </BoxBody>
    </Box>
  );
  expect(view).toMatchSnapshot();
});
