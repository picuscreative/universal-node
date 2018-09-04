import React from 'react';
import PropTypes from 'prop-types';
import styles from '~/shared/styles/grid.scss';

const Container = ({ children }) => <div className={styles.container}>{children}</div>;

Container.propTypes = {
  children: PropTypes.object,
};

export default Container;
