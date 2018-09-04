import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from '~/shared/styles/grid.scss';
import stylesColumn from './styles.scss';

class Column extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    className: PropTypes.string,
    xs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    xsOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    sm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    smOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    md: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mdOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    lg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    lgOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    alignCenter: PropTypes.bool,
    noPadding: PropTypes.bool,
    noPaddingRight: PropTypes.bool,
    noMargin: PropTypes.bool,
  };

  render() {
    const {
      children,
      className,
      xs,
      xsOffset,
      sm,
      smOffset,
      md,
      mdOffset,
      lg,
      lgOffset,
      alignCenter,
      noPadding,
      noPaddingRight,
      noMargin,
    } = this.props;
    const mediaQuery = {
      xs,
      xsOffset,
      sm,
      smOffset,
      md,
      mdOffset,
      lg,
      lgOffset,
    };

    let currentMediaQueryValue = '12';
    const mediaQueriesClassesNames = Object.keys(mediaQuery).map((key) => {
      if (mediaQuery[key]) {
        if (key.includes('Offset')) {
          const offset = key.substring(0, 2);
          return styles[`col-${offset}-offset-${mediaQuery[key]}`];
        }
        currentMediaQueryValue = mediaQuery[key];
        return styles[`col-${key}-${mediaQuery[key]}`];
      }
      return styles[`col-${key}-${currentMediaQueryValue}`];
    });

    return (
      <div
        className={classNames(
          mediaQueriesClassesNames,
          alignCenter && stylesColumn['align-center'],
          noPadding && stylesColumn.noPadding,
          noMargin && stylesColumn.noMargin,
          noPaddingRight && stylesColumn.noPaddingRight,
          className,
        )}
      >
        {children}
      </div>
    );
  }
}

export default Column;
