import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import App from '~/components/App';
import CustomHead from '~/components/CustomHead';
import Svg from '~/components/Svg';
import logo from '~/shared/media/images/picus-logo.jpeg';
import thumbsUp from '~/shared/media/images/icons/thumbs-up.svg';
import styles from '~/shared/styles/pages/about.scss';

class About extends PureComponent {
  static async getInitialProps() {
    return {
      meta: {
        title: 'About',
        description: 'This is an example of a meta description for about page.',
      },
    };
  }

  render() {
    const { meta } = this.props;
    return (
      <App>
        <CustomHead title={meta.title} description={meta.description} />
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

About.propTypes = {
  /**
   * Meta attributes, e.g. title, description etc.
   */
  meta: PropTypes.object.isRequired,
};

export default About;
