import React, { PureComponent } from 'react';
import Link from 'next/link';
import styles from './styles.css';

/**
 * Header
 */
class Header extends PureComponent {
  render() {
    return (
      <header className={styles.header}>
        <Link href="/">
          <a className={styles.url}>Home</a>
        </Link>
        <Link href="/form">
          <a className={styles.url}>Forms & Inputs</a>
        </Link>

        <Link href="/about">
          <a className={styles.url}>About</a>
        </Link>
      </header>
    );
  }
}

export default Header;
