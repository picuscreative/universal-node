/* eslint-disable camelcase */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Raven from 'raven-js';
import Container from '~/components/Container';
/* eslint-disable no-unused-vars */
import reboot from '~/shared/styles/reboot.scss';
import globals from '~/shared/styles/globals.scss';
/* eslint-enable no-unused-vars */
import CustomHead from './CustomHead';
import OfflineSupport from './OfflineSupport';
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
          {children}
          <OfflineSupport />
        </div>
      </Container>
    );
  }
}

export default Page;
