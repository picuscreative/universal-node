import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import App from '~/components/App';
import CustomHead from '~/components/CustomHead';
import Input from '~/components/Input';
import Button from '~/components/Button';
import Checkbox from '~/components/Checkbox';
import FormContainer from '~/components/FormContainer';
import Radio from '~/components/Radio';
import fieldsForm from '~/config/form';
import validateForm from '~/config/form/validator';
import { formValidator } from '~/utils/forms';
import styles from '~/shared/styles/pages/form.scss';

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
      selected: false,
      background: false,
      errorsForm: {},
      validForm: false,
      radioOption: 'blue',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleBoolean = (event) => {
    const { name } = event.target.currentTarget ? event.target.currentTarget : event.target;

    this.setState(prevState => ({
      [name]: !prevState[name],
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email } = event.target.elements;
    const { isValid, errors } = formValidator(
      {
        email,
      },
      validateForm,
    );

    if (isValid) {
      this.setState({
        validForm: true,
        errorsForm: {},
      });
    } else {
      this.setState({
        errorsForm: errors,
      });
    }
  };

  onRadioChange = (property, value) => {
    this.setState({
      [property]: value,
    });
  };

  renderRadioButtons = () => {
    const { radioOption } = this.state;

    const fields = [
      {
        placeholder: 'Paint this blue',
        name: 'blue',
        value: 'blue',
      },
      {
        placeholder: "I'd rather have it red",
        name: 'red',
        value: 'red',
      },
    ];

    return (
      <Radio
        className={styles.radio}
        items={fields}
        property="radioOption"
        value={radioOption}
        handleChange={this.onRadioChange}
      />
    );
  };

  render() {
    const { meta } = this.props;
    const {
      name, selected, background, errorsForm, validForm, radioOption,
    } = this.state;
    return (
      <App>
        <CustomHead title={meta.title} description={meta.description} />
        <h1>Form & Input Examples</h1>
        <p>Demonstration usage of the form elements:</p>
        <div className={styles.wrapper}>
          <div>
            <h3>Input</h3>
            <Input name="name" handleChange={this.handleChange} />
            <label>{name ? `Hey, now I'm named ${name}` : 'I have no name :('}</label>
          </div>
          <div>
            <h3>Checkbox</h3>
            <label>Am I selected?</label>
            <br />
            <Checkbox
              placeholder={selected ? 'Yes, I am' : "No, I'm not"}
              name="selected"
              value={selected}
              checked={selected}
              onChange={this.handleBoolean}
            />
          </div>
          <div>
            <h3>Button</h3>
            <div className={background ? styles.background : ''}>
              {background ? 'Back to how it was!' : 'Change background to red!'}
            </div>
            <Button name="background" action={this.handleBoolean} text="Change background" />
          </div>
          <div>
            <h3>Form</h3>
            <FormContainer
              id="forgot-password-form"
              className={styles.form}
              submitLabel="Validate Email"
              fields={fieldsForm}
              handleSubmit={this.handleSubmit}
              handleErrors={validateForm}
              errors={errorsForm}
            />
            {validForm && <div className={styles.valid}>The email has been validated!</div>}
          </div>
          <div>
            <h3>Radio</h3>
            <div className={radioOption === 'blue' ? styles.blueBg : styles.redBg}>
              {this.renderRadioButtons()}
            </div>
          </div>
        </div>
      </App>
    );
  }
}

export default FormAndInputs;
