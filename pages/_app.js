import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { ThemeProvider } from 'styled-components';
import Page from '~/components/Page';
import makeStore from '~/utils/store';
import Auth from '~/services/auth';
import variablesStyle from '~/shared/styles/variables';
import gridStyle from '~/shared/styles/grid';
import RebootStyle from '~/shared/styles/reboot';
import GlobalStyle from '~/shared/styles/globals';

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
          <ThemeProvider theme={[variablesStyle, gridStyle].reduce((p, c) => Object.assign(p, c))}>
            <div>
              <RebootStyle />
              <GlobalStyle />
              <Page {...pageProps}>
                <Component {...pageProps} />
              </Page>
            </div>
          </ThemeProvider>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(MyApp);
