import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from '~/shared/styles/grid.scss';

class Column extends PureComponent {
  static propTypes = {
    children: PropTypes.object,
    className: PropTypes.object,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
  };

  render() {
    const {
      children, className, xs, sm, md, lg,
    } = this.props;
    const mediaQuery = {
      xs,
      sm,
      md,
      lg,
    };

    let lastMediaQueryValue = '12';
    const mediaQueriesClassesNames = Object.keys(mediaQuery).map((key) => {
      if (mediaQuery[key]) {
        lastMediaQueryValue = mediaQuery[key];
        return styles[`col-${key}-${mediaQuery[key]}`];
      }
      return styles[`col-${key}-${lastMediaQueryValue}`];
    });

    return <div className={classNames(className, mediaQueriesClassesNames)}>{children}</div>;
  }
}

export default Column;
