import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RollDice from './RollDice';

it('renders without crashing', function() {
  shallow(<RollDice />);
});

it('matches snapshot', function() {
  let wrapper = shallow(<RollDice />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
