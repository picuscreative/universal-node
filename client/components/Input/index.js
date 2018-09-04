import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';

/**
 * Input:
 * Component that renders a text inside an h1,
 * intended to be used as a title
 */
class Input extends Component {
  static propTypes = {
    /**
     * Class name for the container
     */
    className: PropTypes.string,
    /**
     * Text that will appear in the element
     */
    placeholder: PropTypes.string,
    /**
     * Allows to add a fixed padding
     */
    withPadding: PropTypes.bool,
    /**
     * Allows to add a fixed padding top
     */
    withPaddingTop: PropTypes.bool,
    /**
     * Allows the alignment of the element to the center
     */
    alignCenter: PropTypes.bool,
    /**
     * Definition of the input type
     */
    type: PropTypes.string,
    /**
     * Value state setter
     */
    handleChange: PropTypes.func,
    /**
     * Name to be given to identify the input element
     */
    name: PropTypes.string.isRequired,
    /**
     * Change style if input has an error condition
     */
    error: PropTypes.bool,
    /**
     * Value to be given to the input element
     */
    value: PropTypes.string,
    /**
     * Pattern for validating in case of HTML5
     */
    pattern: PropTypes.string,
  };

  render() {
    const {
      className,
      placeholder,
      withPadding,
      withPaddingTop,
      alignCenter,
      type,
      handleChange,
      name,
      error,
      value,
    } = this.props;

    return (
      <input
        name={name}
        onChange={handleChange}
        className={classNames(
          className,
          styles.input,
          withPadding && styles.padding,
          withPaddingTop && styles['padding-top'],
          alignCenter && styles.alignCenter,
          error && styles.error,
        )}
        type={type || 'text'}
        placeholder={placeholder}
        value={value}
      />
    );
  }
}

export default Input;
