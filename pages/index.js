import React, { PureComponent } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import App from '../client/components/App';
import CustomHead from '../client/components/CustomHead';
import withRedux from '../client/utils/withRedux';
import initStore from '../client/utils/store';
import userActions from '../client/actions/user';

class Index extends PureComponent {
  static async getInitialProps() {
    return {
      meta: {
        title: 'project-name',
        description: 'This is an example of a meta description for project-name page.',
      },
    };
  }

  componentDidMount() {
    const userId = 1;
    this.props.loadUser(userId);
  }

  render() {
    const { meta, user } = this.props;
    return (
      <App>
        <CustomHead
          title={ meta.title }
          description={ meta.description }
        />
        <h1>project-name</h1>
        <p>Hello { user.email }</p>
        <p>Visit <Link href="/about"><a>PICUS</a></Link></p>
      </App>
    );
  }
}

Index.propTypes = {
  user: PropTypes.object,
  loadUser: PropTypes.func,
  /**
   * Meta attributes, e.g. title, description etc.
   */
  meta: PropTypes.object.isRequired,
};

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = dispatch => ({
  loadUser: id => dispatch(userActions.loadUser(id)),
});

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Index);
