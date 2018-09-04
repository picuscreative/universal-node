import React, { PureComponent } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import App from '../client/components/App';
import CustomHead from '../client/components/CustomHead';
import userActions from '../client/actions/user';

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
    const { meta, user } = this.props;
    return (
      <App>
        <CustomHead title={meta.title} description={meta.description} />
        <h1>project-name</h1>
        <p>Hello {user.email}</p>
        <p>
          Visit
          <Link href="/about">
            <a>PICUS</a>
          </Link>
        </p>
      </App>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(userActions.login({ email, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
