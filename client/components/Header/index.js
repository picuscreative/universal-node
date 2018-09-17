import React, { PureComponent } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { pageRoutes } from '~/config/routes';
import Container from '~/components/Container';
import Column from '~/components/Container/Column';
import Row from '~/components/Container/Row';
import logo from '~/shared/media/images/picus-logo.jpg';
import styles from './styles.scss';

/**
 * Header
 */
class Header extends PureComponent {
  static propTypes = {
    /**
     * User information, in case it's logged in
     */
    isAuthenticated: PropTypes.bool,
  };

  render() {
    return (
      <header className={styles.header}>
        <Container fluid>
          <Row>
            <Column xs="8" xsOffset="2" sm="8" smOffset="2" md="8" mdOffset="2" lg="8" lgOffset="2">
              <div className={classNames(styles.logo)}>
                <Link href={pageRoutes.HOME_PATH}>
                  <a href={pageRoutes.HOME_PATH}>
                    <img src={logo} alt="PICUS" />
                  </a>
                </Link>
              </div>
            </Column>
          </Row>
          <Row>
            <Column className={styles.url} xs="12" sm="12" md="12" lg="12">
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/form">
                <a>Forms & Inputs</a>
              </Link>
              <Link href="/about">
                <a>About</a>
              </Link>
            </Column>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
