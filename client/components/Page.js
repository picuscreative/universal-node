/* eslint-disable camelcase */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Raven from 'raven-js';
import { Offline, Online } from 'react-detect-offline';
import Container from '~/components/Container';
import Column from '~/components/Container/Column';
/* eslint-disable no-unused-vars */
import reboot from '~/shared/styles/reboot.scss';
import globals from '~/shared/styles/globals.scss';
/* eslint-enable no-unused-vars */
import CustomHead from './CustomHead';
import Header from './Header';

class Page extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    meta: PropTypes.object,
    private: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    userId: PropTypes.string,
    user: PropTypes.object,
  };

  static propTypes = {
    className: PropTypes.string,
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
    const {
      meta, isAuthenticated, className, children,
    } = this.props;

    return (
      <Container>
        <div className={classNames(className)}>
          <CustomHead title={meta.title} description={meta.description} />
          <Container fluid>
            <Header isAuthenticated={isAuthenticated} />
          </Container>
          <Online>{children}</Online>
          <Offline
            onChange={() => {
              setTimeout(() => {
                /* eslint-disable no-restricted-globals */
                location.reload();
                /* eslint-enable no-restricted-globals */
              }, 5000);
            }}
          >
            <Column alignCenter>
              <div>You are offline at the moment.</div>
              <div>Please turn on your connection and refresh the page.</div>
            </Column>
          </Offline>
        </div>
      </Container>
    );
  }
}

export default Page;
