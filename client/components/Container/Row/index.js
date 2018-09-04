import React from 'react';
import PropTypes from 'prop-types';
import styles from '~/shared/styles/grid.scss';

const Row = ({ children }) => <div className={styles.row}>{children}</div>;

Row.propTypes = {
  children: PropTypes.object,
};

export default Row;
