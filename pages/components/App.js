import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
/* eslint-disable no-unused-vars */
import shared from '../shared/styles/index.css';
/* eslint-enable no-unused-vars */

class App extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Header />
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.array,
};

export default App;
