import React, { PureComponent } from 'react';
import App from './components/App';
import CustomHead from './components/CustomHead';
import Svg from './components/Svg';
import logo from './shared/media/images/picus-logo.jpeg';
import thumbsUp from './shared/media/images/icons/thumbs-up.svg';

class About extends PureComponent {
  render() {
    return (
      <App>
        <CustomHead title="about page" description="This is an example of a meta description for about page."/>
        <h1>PICUS Creative</h1>
        <p>BRINGING AMAZING DIGITAL PRODUCTS TO LIFE.</p>
        <Svg className="icon" svg={ thumbsUp } />
        <a href="http://picuscreative.com" target="_blank" rel="noopener noreferrer">
          <img width="100px" src={ logo } alt="PICUS" />
        </a>
      </App>
    );
  }
}

export default About;
