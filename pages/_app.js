import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import makeStore from '~/utils/store';
import Auth from '~/services/auth';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    ctx.userId = Auth.getUserId(ctx);
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    Object.assign(pageProps, {
      isAuthenticated: Auth.isAuthenticated(ctx),
    });

    if (pageProps.private) {
      Auth.redirectIfNotAuthenticated(ctx, pageProps.user);
      Object.assign(pageProps, {
        userId: ctx.userId,
      });
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container fluid>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(MyApp);
