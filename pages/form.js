import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import App from '../client/components/App';
import CustomHead from '../client/components/CustomHead';

class FormAndInputs extends PureComponent {
  static async getInitialProps() {
    return {
      meta: {
        title: 'Forms & Inputs',
        description: 'This is an example on how to use the form and input elements.',
      },
    };
  }

  static propTypes = {
    /**
     * Meta attributes, e.g. title, description etc.
     */
    meta: PropTypes.object.isRequired,
  };

  render() {
    const { meta } = this.props;
    return (
      <App>
        <CustomHead title={meta.title} description={meta.description} />
        <h1>Form & Input Examples</h1>
        <p>Demonstration usage of the form elements:</p>
      </App>
    );
  }
}

export default FormAndInputs;
