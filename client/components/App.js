import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
/* eslint-disable no-unused-vars */
import reboot from '~/shared/styles/reboot.scss';
import globals from '~/shared/styles/globals.scss';
/* eslint-enable no-unused-vars */
import Header from './Header';

class App extends PureComponent {
  render() {
    const { className, children } = this.props;

    return (
      <div className={className}>
        <Header />
        {children}
      </div>
    );
  }
}

App.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array,
};

export default App;
