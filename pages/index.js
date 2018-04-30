import React, { PureComponent } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import App from './components/App';
import Head from './components/Head';
import withRedux from './utils/withRedux';
import initStore from './utils/store';
import userActions from './actions/user';

class Index extends PureComponent {
  componentDidMount() {
    const userId = 1;
    this.props.loadUser(userId);
  }

  render() {
    const { user } = this.props;

    return (
      <App>
        <Head title="index page" description="This is an example of a meta description for index page."/>
        <h1>project-name</h1>
        <p>Hello {user.email} from <Link href="/about"><a>PICUS</a></Link></p>
      </App>
    );
  }
}

Index.propTypes = {
  user: PropTypes.object,
  loadUser: PropTypes.func,
};

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = dispatch => ({
  loadUser: id => dispatch(userActions.loadUser(id)),
});

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Index);
