import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';

/**
 * Button
 */
class Button extends Component {
  static propTypes = {
    /**
     * Class name for the Button wrapper container
     */
    wrapperClassname: PropTypes.string,
    /**
     * Class name for the Button container
     */
    className: PropTypes.string,
    /**
     * Text that appears inside the button
     */
    text: PropTypes.string.isRequired,
    /**
     * Name to be given to identify the button element
     */
    name: PropTypes.string.isRequired,
    /**
     * The type of button that needs to be rendered,
     * that by default is assumed to be "button"
     */
    type: PropTypes.string,
    /**
     * Action that will be called when the button is clicked
     */
    action: PropTypes.func,
    /**
     * Boolean attribute that specifies if the button element
     * has been selected by an outside action
     */
    selected: PropTypes.bool,
    /**
     * Identifying id of the itme surrounded by the button
     */
    dataId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * Flag for the parent action to know whether
     * or not to call another related function
     */
    dataCallback: PropTypes.string,
    /**
     * Boolean attribute that specifies a second button style form
     */
    disabled: PropTypes.bool,
  };

  render() {
    const {
      wrapperClassname,
      className,
      name,
      type,
      text,
      action,
      selected,
      dataId,
      dataCallback,
      disabled,
    } = this.props;

    return (
      <div className={classNames(styles['submit-wrapper'], wrapperClassname)} data-id={dataId}>
        <div className={classNames(styles['submit-wrapper-relative'])} data-id={dataId}>
          <button
            id={dataId}
            className={classNames(styles.button, selected && styles.selected, className)}
            name={name}
            type={type || 'button'}
            onClick={action}
            data-id={dataId}
            data-callback={dataCallback}
            disabled={disabled}
          >
            {text}
          </button>
        </div>
      </div>
    );
  }
}

export default Button;
