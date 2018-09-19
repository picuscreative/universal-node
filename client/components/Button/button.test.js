/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe('Button', () => {
  it('should render an empty button', () => {
    const component = shallow(<Button text="test" />);

    expect(component.getElements()).toMatchSnapshot();
  });

  it('should render a button with a text', () => {
    const button = shallow(<Button
        wrapperClassname={null}
        className={null}
        name={null}
        type={null}
        text="test"
        action={() => null}
        selected={false}
        dataId={null}
        dataCallback={null}
        disabled={false}
      />);

    expect(button.find('button').text()).toBe('test');
  });

  it('should render a button with an empty text', () => {
    const button = shallow(<Button
        wrapperClassname={null}
        className={null}
        name={null}
        type={null}
        text=""
        action={() => null}
        selected={false}
        dataId={null}
        dataCallback={null}
        disabled={false}
      />);

    expect(button.find('button').text()).toBe('');
  });

  it('should not render a button with an null text', () => {
    const button = shallow(<Button
        wrapperClassname={null}
        className={null}
        name={null}
        type={null}
        text={'text123'}
        action={() => null}
        selected={false}
        dataId={null}
        dataCallback={null}
        disabled={false}
      />);

    expect(button.find('button').text()).not.toBe(null);
  });

  it('should render a button with an null text', () => {
    const button = shallow(<Button
        wrapperClassname={null}
        className={null}
        name={null}
        type={null}
        text={null}
        action={() => null}
        selected={false}
        dataId={null}
        dataCallback={null}
        disabled={false}
      />);

    expect(button.find('button').text()).toBe('');
  });

  it('button text should not match with expected text', () => {
    const button = shallow(<Button
        wrapperClassname={null}
        className={null}
        name={null}
        type={null}
        text="test123"
        action={() => null}
        selected={false}
        dataId={null}
        dataCallback={null}
        disabled={false}
      />);

    expect(button.find('button').text()).not.toBe('test12');
  });
});
