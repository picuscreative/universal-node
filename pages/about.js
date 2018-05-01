import React, { PureComponent } from 'react';
import App from './components/App';
import Head from './components/Head';
import logo from './shared/media/images/picus-logo.jpeg';
import styles from './about.css';

class About extends PureComponent {
  render() {
    return (
      <App className={ styles.about }>
        <Head title="about page" description="This is an example of a meta description for about page."/>
        <h1>PICUS Creative</h1>
        <p>BRINGING AMAZING DIGITAL PRODUCTS TO LIFE.</p>
        <img width="100px" src={ logo } alt="PICUS" />
      </App>
    );
  }
}

export default About;
