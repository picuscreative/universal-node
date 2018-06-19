import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

/**
 * Custom Head:
 * Dynamically set `<head>` attributes for SEO
 */
class CustomHead extends PureComponent {
  static propTypes = {
    /**
     * Title meta tag content
     */
    title: PropTypes.string,
    /**
     * Description meta tag content
     */
    description: PropTypes.string,
  };

  render() {
    const { title, description } = this.props;
    return (
      <div>
        <Head>
          <title>{title}</title>
          {description ? <meta key="description" name="description" content={description} /> : null}
          {/* any other meta tags */}
        </Head>
      </div>
    );
  }
}

export default CustomHead;
