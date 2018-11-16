import React, { PureComponent } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { pageRoutes } from '~/config/routes';
import { Row, Col } from '~/components/Grid';
import logo from '~/shared/media/images/picus-logo.jpg';
import { Img, NavLink } from './styles';

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
      <header>
        <Row>
          <Col>
            <div>
              <Link href={pageRoutes.HOME_PATH}>
                <a href={pageRoutes.HOME_PATH}>
                  <Img src={logo} alt="PICUS" />
                </a>
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link href="/">
              <NavLink href="/">Home</NavLink>
            </Link>
            <Link href="/about">
              <NavLink href="/about">About</NavLink>
            </Link>
          </Col>
        </Row>
      </header>
    );
  }
}

export default Header;
