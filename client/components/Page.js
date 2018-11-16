/* eslint-disable camelcase */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Raven from 'raven-js';
import { Grid } from '~/components/Grid';
import CustomHead from './CustomHead';
import OfflineSupport from './OfflineSupport';
import Header from './Header';

class Page extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    meta: PropTypes.object,
    private: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    userId: PropTypes.string,
    user: PropTypes.object,
  };

  componentDidMount() {
    // load Sentry if it exists in env file (see README for configuration)
    if (process.env.REACT_APP_SENTRY_DSN) {
      Raven.config(process.env.REACT_APP_SENTRY_DSN).install();
      if (this.props.userId) {
        Raven.setUserContext({
          id: this.props.userId,
        });
      }
    }
  }

  render() {
    const { meta, isAuthenticated, children } = this.props;

    return (
      <Grid fluid>
        <CustomHead title={meta.title} description={meta.description} />
        <Header isAuthenticated={isAuthenticated} />
        {children}
        <OfflineSupport />
      </Grid>
    );
  }
}

export default Page;
