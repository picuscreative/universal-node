import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';

/**
 * Checkbox:
 * Component that renders a checkbox
 */
class Checkbox extends Component {
  static propTypes = {
    /**
     * Class name for the element
     */
    className: PropTypes.string,
    /**
     * Class name for the container
     */
    checkboxContainerClassName: PropTypes.string,
    /**
     * Text that will appear in the element
     */
    placeholder: PropTypes.string.isRequired,
    /**
     * Name to be given to identify the checkbox element
     */
    name: PropTypes.string.isRequired,
    /**
     * Value to be associated with the checkbox element
     */
    value: PropTypes.bool,
    /**
     * If we wish for the label to be on the left of the checkbox
     */
    leftLabel: PropTypes.bool,
    /**
     * On Change function to interact with current state
     */
    onChange: PropTypes.func,
  };

  render() {
    const {
      className,
      checkboxContainerClassName,
      placeholder,
      name,
      value,
      leftLabel,
      onChange,
    } = this.props;

    return (
      <label
        className={classNames(
          styles.checkboxContainer,
          checkboxContainerClassName,
          leftLabel && styles.leftLabel,
          className,
        )}
      >
        {placeholder}
        <input
          id={name}
          name={name}
          className={classNames(className)}
          type="checkbox"
          checked={value}
          value={value}
          onChange={onChange}
        />
        <span
          className={classNames(
            styles.checkbox,
            value && styles.checked,
            leftLabel && styles.leftLabel,
          )}
        />
      </label>
    );
  }
}

export default Checkbox;
