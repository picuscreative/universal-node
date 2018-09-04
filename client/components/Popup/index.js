import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Column from '~/components/Container/Column';
import styles from './styles.scss';

/**
 * Popup:
 * Component that, by receiving content as HTML,
 * can present it in the form of a popup
 */
class Popup extends Component {
  static propTypes = {
    /**
     * Class name for styling
     */
    className: PropTypes.string,
    /**
     * Items elements to be rendered as child
     */
    items: PropTypes.array,
    /**
     * Type of popup, e.g. large
     */
    type: PropTypes.string,
    /**
     * Trigger function to close popup
     */
    onClose: PropTypes.func,
    /**
     * Trigger opening
     */
    canShow: PropTypes.bool,
  };

  render() {
    const {
      canShow, onClose, items, type, className,
    } = this.props;

    return (
      <div id="popup">
        <Column xs="12" sm="12" md="12" lg="12">
          <div className={classNames(styles.overlay, canShow && styles.show)} />
          <div
            className={classNames(
              styles.popup,
              canShow && styles.show,
              type === 'large' && styles.large,
              className,
            )}
          >
            <div className={classNames(styles.popup_inner, className)}>
              {items.map((item, index) =>
                  item.active && (
                    <div key={`${item.id}-${index}`}>
                      {!item.hideCloseButton && <div className={styles.close} onClick={onClose} />}
                      {item.section}
                    </div>
                  ))}
            </div>
          </div>
        </Column>
      </div>
    );
  }
}
export default Popup;
