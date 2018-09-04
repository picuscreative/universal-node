import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '~/components/Button';
import styles from './styles.scss';

/**
 * Simple Item:
 * Popup item with title and buttons,
 */
class SimpleItem extends Component {
  static propTypes = {
    /**
     * Class name for styling
     */
    className: PropTypes.string,
    /**
     * Item layout title
     */
    title: PropTypes.string,
    /**
     * Item layout description
     */
    description: PropTypes.string,
    /**
     * Item layout list of buttons
     */
    buttons: PropTypes.array,
    /**
     * Children elements for the popup
     */
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  };

  render() {
    const {
      className, title, description, buttons, children,
    } = this.props;

    return (
      <div className={classNames(styles.item, className)}>
        <div>{title}</div>
        {description && <div className={styles.subtitle}> {description} </div>}
        {children}
        {buttons && (
          <div className={styles.buttons}>
            {buttons.map((button, index) => (
              <Button
                key={`${button.id}-${index}`}
                noHover
                action={button.action}
                text={button.text}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}
export default SimpleItem;
