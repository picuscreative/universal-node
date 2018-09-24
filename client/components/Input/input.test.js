/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Input from '~/components/Input';

describe('Input', () => {
  it('should render an empty input', () => {
    const component = shallow(<Input name="test" />);

    expect(component.getElements()).toMatchSnapshot();
  });
});
