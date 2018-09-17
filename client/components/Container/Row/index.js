import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from '~/shared/styles/grid.scss';

const Row = ({ children, className }) => (
  <div className={classNames(styles.row, className)}>{children}</div>
);

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Row;
