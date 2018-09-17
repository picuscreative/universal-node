import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

/**
 * BottomList
 */
class BottomList extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  };

  render() {
    const { children } = this.props;

    return <div className={styles['bottom-list']}>{children}</div>;
  }
}

export default BottomList;
