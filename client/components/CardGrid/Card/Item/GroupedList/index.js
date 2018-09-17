import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

/**
 * GroupedList
 */
class GroupedList extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  };

  render() {
    const { title, children } = this.props;

    return (
      <div className={styles['list-wrapper']}>
        <div>
          <span className={styles.title}>{title}</span>
        </div>
        {children}
      </div>
    );
  }
}

export default GroupedList;
