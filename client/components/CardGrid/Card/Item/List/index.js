import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { flatten } from 'lodash';
import styles from './styles.scss';

/**
 * ItemList
 */
class ItemList extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.array,
  };

  static defaultProps = {
    data: [],
  };

  render() {
    const { className, data } = this.props;

    return (
      <div className={classNames(styles['list-wrapper'], className)}>
        <ul className={styles.list}>
          {flatten(data).map((item, itemIndex) => <li key={`${itemIndex}`}>{item}</li>)}
        </ul>
      </div>
    );
  }
}

export default ItemList;
