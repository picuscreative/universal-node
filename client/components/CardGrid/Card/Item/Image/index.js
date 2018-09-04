import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';

/**
 * ItemImage
 */
class ItemImage extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
  };

  render() {
    const { className, src } = this.props;
    return <img src={src} className={classNames(styles.image, className)} />;
  }
}

export default ItemImage;
