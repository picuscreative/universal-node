import React, { PureComponent } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Page from '../client/components/Page';

class Index extends PureComponent {
  static async getInitialProps() {
    return {
      id: 1,
      meta: {
        title: 'project-name',
        description: 'This is an example of a meta description for project-name page.',
      },
    };
  }

  static propTypes = {
    /**
     * Current information of the user, if logged in
     */
    user: PropTypes.object,
    /**
     * Function that logins the user based on the email and password sent
     */
    loginUser: PropTypes.func,
    /**
     * Meta attributes, e.g. title, description etc.
     */
    meta: PropTypes.object.isRequired,
  };

  render() {
    const { user } = this.props;
    return (
      <Page {...this.props}>
        <h1>project-name</h1>
        <p>Hello {user}</p>
        <p>
          Visit
          <Link href="/about">
            <a>PICUS</a>
          </Link>
        </p>
      </Page>
    );
  }
}

export default Index;
