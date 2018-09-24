import React, { Component } from 'react';
import PropTypes from 'prop-types';
import App from '~/components/Page';
import Svg from '~/components/Svg';
import logo from '~/shared/media/images/picus-logo.jpg';
import thumbsUp from '~/shared/media/images/icons/thumbs-up.svg';
import styles from '~/shared/styles/pages/about.scss';

class About extends Component {
  static async getInitialProps() {
    return {
      meta: {
        title: 'About',
        description: 'This is an example of a meta description for about page.',
      },
    };
  }

  static propTypes = {
    /**
     * Meta attributes, e.g. title, description etc.
     */
    meta: PropTypes.object.isRequired,
  };

  render() {
    return (
      <App {...this.props}>
        <h1>PICUS Creative</h1>
        <p>BRINGING AMAZING DIGITAL PRODUCTS TO LIFE.</p>
        <Svg className={styles.icon} svg={thumbsUp} />
        <a href="http://picuscreative.com" target="_blank" rel="noopener noreferrer">
          <img width="100px" src={logo} alt="PICUS" />
        </a>
      </App>
    );
  }
}

export default About;
