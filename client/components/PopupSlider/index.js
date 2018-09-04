import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';
/**
 * PopupSlider:
 * Component that, by receiving content as HTML,
 * can present it in the form of a popup slider
 */
class PopupSlider extends PureComponent {
  static propTypes = {
    /**
     * Class name for the container
     */
    className: PropTypes.string,
    /**
     * Children elements for the popup slider
     */
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    /**
     * Trigger show/hide animation
     */
    canShow: PropTypes.bool,
  };

  componentDidMount() {
    if (this.props.canShow) {
      document.getElementsByTagName('body')[0].classList.add('no-overflow');
    } else {
      document.getElementsByTagName('body')[0].classList.remove('no-overflow');
    }
  }

  componentDidUpdate() {
    if (this.props.canShow) {
      document.getElementsByTagName('body')[0].classList.add('no-overflow');
    } else {
      document.getElementsByTagName('body')[0].classList.remove('no-overflow');
    }
  }

  render() {
    const { children, className, canShow } = this.props;

    return (
      <div
        className={classNames(
          styles.basket,
          canShow ? styles['fade-show'] : styles['fade-hide'],
          styles.popup,
          className,
        )}
      >
        <div className={classNames(className, styles.popup_inner)}>{children}</div>
      </div>
    );
  }
}
export default PopupSlider;
