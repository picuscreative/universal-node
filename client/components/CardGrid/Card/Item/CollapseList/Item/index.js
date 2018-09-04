import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Svg from '~/components/Svg';
import styles from './styles.scss';

/**
 * CollapseListItem
 */
class CollapseListItem extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    icon: PropTypes.string,
    onCollapse: PropTypes.func,
    collapsedItemId: PropTypes.string,
    cardWithoutTitle: PropTypes.bool,
  };

  render() {
    const {
      id,
      className,
      title,
      icon,
      onCollapse,
      collapsedItemId,
      cardWithoutTitle,
    } = this.props;

    const childWithProp = React.Children.map(this.props.children, (child) => {
      if (child) {
        return React.cloneElement(child, {
          className: classNames(child.props.className, styles.list),
        });
      }
      return null;
    });

    return (
      <div
        className={classNames(
          styles.collapsible,
          collapsedItemId === id && styles.open,
          className,
          cardWithoutTitle && styles.cardWithoutTitle,
        )}
      >
        {title && (
          <div id={id} className={classNames(styles['collapsible-item'])} onClick={onCollapse}>
            <span className={styles.title}>{title}</span>
            <span>{icon && <Svg className={styles.icon} svg={icon} />}</span>
          </div>
        )}
        {childWithProp}
      </div>
    );
  }
}

export default CollapseListItem;
