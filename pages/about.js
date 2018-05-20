import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import App from '../client/components/App';
import CustomHead from '../client/components/CustomHead';
import Svg from '../client/components/Svg';
import logo from '../client/shared/media/images/picus-logo.jpeg';
import thumbsUp from '../client/shared/media/images/icons/thumbs-up.svg';

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
        <CustomHead
          title={ meta.title }
          description={ meta.description }
        />
        <h1>PICUS Creative</h1>
        <p>BRINGING AMAZING DIGITAL PRODUCTS TO LIFE.</p>
        <Svg className="icon" svg={ thumbsUp } />
        <a href="http://picuscreative.com" target="_blank" rel="noopener noreferrer">
          <img width="100px" src={ logo } alt="PICUS" />
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
