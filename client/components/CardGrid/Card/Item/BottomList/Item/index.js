import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

/**
 * BottomListItem
 */
class BottomListItem extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  };

  render() {
    const { children } = this.props;

    return <div className={styles['bottom-list-item']}>{children}</div>;
  }
}

export default BottomListItem;
