import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg from '~/components/Svg';
import { Row, Col } from '~/components/Grid';
import thumbsUp from '~/shared/media/images/icons/thumbs-up.svg';

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
      <Row>
        <Col>
          <h1>PICUS Creative</h1>
          <p>BRINGING AMAZING DIGITAL PRODUCTS TO LIFE.</p>
          <Svg svg={thumbsUp} />
        </Col>
      </Row>
    );
  }
}

export default About;
