import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

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
  title: PropTypes.string,
  description: PropTypes.string,
};

export default CustomHead;
