import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Svg from '~/components/Svg';
import styles from './styles.scss';

/**
 * ItemAction
 */
class ItemAction extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    iconName: PropTypes.string,
    iconSvg: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
  };

  render() {
    const {
      id, className, iconName, iconSvg, handleClick,
    } = this.props;
    return (
      <div
        data-id={id}
        className={classNames(className, styles.action, iconName === 'close' && styles.close)}
        onClick={handleClick}
      >
        {iconSvg && <Svg svg={iconSvg} />}
      </div>
    );
  }
}

export default ItemAction;
