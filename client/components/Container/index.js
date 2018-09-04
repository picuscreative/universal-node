import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from '~/shared/styles/grid.scss';

const Container = ({ className, fluid, children }) => (
  <div className={classNames(className, fluid ? styles['container-fluid'] : styles.container)}>
    {children}
  </div>
);

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  fluid: PropTypes.bool,
};

export default Container;
