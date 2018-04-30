import React, { PureComponent } from 'react';
import App from './components/App';
import Head from './components/Head';

class About extends PureComponent {
  render() {
    return (
      <App>
        <Head title="about page" description="This is an example of a meta description for about page."/>
        <h1>PICUS Creative</h1>
        <p>BRINGING AMAZING DIGITAL PRODUCTS TO LIFE.</p>
      </App>
    );
  }
}

export default About;
