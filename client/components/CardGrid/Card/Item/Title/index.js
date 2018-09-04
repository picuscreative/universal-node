import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';

/**
 * ItemTitle
 */
class ItemTitle extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
  };

  render() {
    const { className, title } = this.props;

    return (
      <div>
        <div className={classNames('title', className, styles.title)}>{title}</div>
      </div>
    );
  }
}

export default ItemTitle;
