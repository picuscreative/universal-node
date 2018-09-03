import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Input from '~/components/Input';
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

  constructor(props) {
    super(props);
    this.state = {
      name: null,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { meta } = this.props;
    const { name } = this.state;
    return (
      <App>
        <CustomHead title={meta.title} description={meta.description} />
        <h1>Form & Input Examples</h1>
        <p>Demonstration usage of the form elements:</p>
        <Input name="name" handleChange={this.handleChange} />
        <label>{name ? `Hey, now I'm named ${name}` : 'I have no name :('}</label>
      </App>
    );
  }
}

export default FormAndInputs;
