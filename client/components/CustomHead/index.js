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
     * Meta tags content
     */
    meta: PropTypes.string,
  };

  render() {
    const { meta } = this.props;
    return (
      <div>
        <Head>
          <title>{meta.title || 'project-name'}</title>
          <meta
            key="description"
            name="description"
            content={meta.description || 'project-name description'}
          />
          {/* any other meta tags */}
        </Head>
      </div>
    );
  }
}

export default CustomHead;
