import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';

/**
 * ItemSelectedText
 */
class ItemSelectedText extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    text: PropTypes.string,
  };

  render() {
    const { id, className, text } = this.props;
    return (
      <span id={id} className={classNames(styles.selectedText, className)}>
        {text}
      </span>
    );
  }
}

export default ItemSelectedText;
