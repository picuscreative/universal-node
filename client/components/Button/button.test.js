/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Button from '~/components/Button';
import sinon from 'sinon';

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

  it('should call a mock function when button is clicked', () => {
    const mockClick = jest.fn();

    const button = shallow(<Button
        wrapperClassname={null}
        className={null}
        name={null}
        type={null}
        text="test123"
        action={mockClick}
        selected={false}
        dataId={null}
        dataCallback={null}
        disabled={false}
      />);
    button.find('button').simulate('click');
    expect(mockClick).toHaveBeenCalled();
  });

  it('should call only once a mock function when button is clicked', () => {
    const mockClick = jest.fn();

    const button = shallow(<Button
        wrapperClassname={null}
        className={null}
        name={null}
        type={null}
        text="test123"
        action={mockClick}
        selected={false}
        dataId={null}
        dataCallback={null}
        disabled={false}
      />);
    button.find('button').simulate('click');
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it('should return value 10 when the button on button click', () => {
    const mockClick = sinon.fake(() => 10);

    const component = shallow(<Button text="test" action={mockClick} />);
    component.find('button').simulate('click');
    expect(mockClick.calledOnce).toBe(true);
    expect(mockClick.returnValues[0]).toBe(10);
  });
});
