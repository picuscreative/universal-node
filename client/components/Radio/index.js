import React, { Component } from 'react';
import PropTypes from 'prop-types';
import first from 'lodash/first';
import classNames from 'classnames';
import styles from './styles.scss';

/**
 * Radio:
 * Component that renders a radio button
 */
class Radio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: props.value || first(props.items).value,
    };
  }

  static propTypes = {
    /**
     * Class name for the container
     */
    className: PropTypes.string,
    /**
     * List of information to render each radio input
     */
    items: PropTypes.array.isRequired,
    /**
     * Triggers a callback on a value change
     */
    handleChange: PropTypes.func.isRequired,
    /**
     * Name of the key that'll affect the parent state
     */
    property: PropTypes.string.isRequired,
    /**
     * Value that'll affect the radio input
     */
    value: PropTypes.string,
  };

  handleOptionChange = (event) => {
    const { handleChange, property } = this.props;
    const { value } = event.target;

    handleChange(property, value);

    this.setState({
      selectedOption: value,
    });
  };

  render() {
    const { className, items } = this.props;
    const { selectedOption } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleFormSubmit}>
        {items.map((item, index) => (
          <div
            key={`${item.value}-${index}`}
            className={classNames(className, item.description && styles.descriptionContainer)}
          >
            <label className={classNames(styles.radioContainer)}>
              {item.placeholder}
              <input
                id={item.name}
                name={item.name}
                type="radio"
                value={item.value}
                checked={selectedOption === item.value}
                onChange={this.handleOptionChange}
              />
              <span className={classNames(styles.radio)} />
            </label>
            {item.description && <div className={styles.description}>{item.description}</div>}
          </div>
        ))}
      </form>
    );
  }
}

export default Radio;
