import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { merge } from 'lodash';
import Form from './Form';

/**
 * FormContainer
 */
class FormContainer extends Component {
  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    submitLabel: PropTypes.string,
    errors: PropTypes.object,
    fields: PropTypes.object.isRequired,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func.isRequired,
    handleErrors: PropTypes.func.isRequired,
    groups: PropTypes.array,
    single: PropTypes.bool,
    white: PropTypes.bool,
    successMessage: PropTypes.object,
    notificationBefore: PropTypes.bool,
    reset: PropTypes.bool,
  };

  static defaultProps = {
    groups: [],
    notificationBefore: true,
  };

  constructor(props) {
    super(props);
    const { handleSubmit } = props;

    this.state = this.getInitialState();

    this.handleSubmit = handleSubmit.bind(this);
  }

  componentDidUpdate(previousProps) {
    if (previousProps.errors !== this.props.errors) {
      this.setState(merge({}, this.state, this.props.errors));
    }

    if (previousProps.fields !== this.props.fields) {
      this.setState(merge({}, this.state, this.props.fields));
    }

    if (this.props.reset === true && previousProps.reset !== this.props.reset) {
      this.setState(this.getInitialState());
    }
  }

  handleChange = (event) => {
    // Run handle change callback from parent component
    if (this.props.handleChange) {
      this.props.handleChange();
    }

    const { handleErrors } = this.props;
    const { name } = event.target;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    const errors = handleErrors(
      {
        name,
        value,
      },
      this.state,
    );

    this.setState(merge({}, this.state, { [name]: { value, errors } }));
  };

  getInitialState = () => {
    const { fields } = this.props;

    return {
      ...Object.keys(fields).reduce(
        (acc, curr) => ({
          ...acc,
          [curr]: {
            type: fields[curr].type,
            value: fields[curr].value,
            className: fields[curr].className,
            isDirty: false,
            placeholder: fields[curr].placeholder,
            errors: { isValid: true },
          },
        }),
        {},
      ),
    };
  };

  render() {
    const {
      id,
      className,
      submitLabel,
      groups,
      single,
      white,
      successMessage,
      notificationBefore,
    } = this.props;

    return (
      <Form
        id={id}
        className={className}
        submitLabel={submitLabel}
        fields={this.state}
        groups={groups}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        single={single}
        white={white}
        successMessage={successMessage}
        notificationBefore={notificationBefore}
      />
    );
  }
}

export default FormContainer;
