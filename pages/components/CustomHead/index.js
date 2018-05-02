import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

/**
 * Custom Head -
 * Dynamically set "<head>" attributes for SEO
 */
class CustomHead extends PureComponent {
  render() {
    const { title, description } = this.props;

    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Head>
      </div>
    );
  }
}

CustomHead.propTypes = {
  /**
   * Title meta tag content
   */
  title: PropTypes.string.isRequired,
  /**
   * Description meta tag content
   */
  description: PropTypes.string.isRequired,
};

export default CustomHead;
