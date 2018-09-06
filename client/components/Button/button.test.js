/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Button from '~/components/Button';

describe('Button', () => {
  it('should render an empty button', () => {
    const component = shallow(<Button text="test" />);

    expect(component.getElements()).toMatchSnapshot();
  });
});
