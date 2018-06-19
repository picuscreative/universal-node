import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Form from './Form';

/**
 * FormContainer
 */
class FormContainer extends Component {
  static propTypes = {
    id: PropTypes.string,
    errors: PropTypes.object,
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleErrors: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    const { fields, handleSubmit } = props;

    this.state = {
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

    this.handleSubmit = handleSubmit.bind(this);
  }

  componentDidUpdate(previousProps) {
    if (previousProps.errors !== this.props.errors) {
      this.setState(_.merge({}, this.state, this.props.errors));
    }

    if (previousProps.fields !== this.props.fields) {
      this.setState(_.merge({}, this.state, this.props.fields));
    }
  }

  handleChange = (event) => {
    const { handleErrors } = this.props;
    const { name, value } = event.target;
    const errors = handleErrors(
      {
        name,
        value,
      },
      this.state,
    );

    this.setState(_.merge({}, this.state, { [name]: { value, errors } }));
  };

  render() {
    return (
      <Form
        id={this.props.id}
        fields={this.state}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default FormContainer;
