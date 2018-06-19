import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Form
 */
class Form extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    fields: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
  };

  static createField(name, field, onChange) {
    const {
      type, value, className, placeholder,
    } = field;
    const props = {
      name,
      onChange,
      placeholder,
      value,
      autoComplete: name,
    };

    switch (type) {
      case 'email':
        return <input className={classNames(className)} type="email" {...props} />;
      case 'password':
        return <input className={classNames(className)} type="password" {...props} />;
      default:
        return <input type="text" {...props} />;
    }
  }

  render() {
    const {
      id, fields, onChange, onSubmit,
    } = this.props;
    const elements = Object.keys(fields).map((fieldName, index) => {
      const { isValid, error } = fields[fieldName].errors;
      return (
        <div key={`${fieldName}-${index}`}>
          {Form.createField(fieldName, fields[fieldName], onChange)}
          {!isValid ? (
            <div className={classNames(fields[fieldName].className, 'error')}>{error}</div>
          ) : null}
        </div>
      );
    });

    return (
      <div>
        <form id={id || 'form'} onSubmit={onSubmit} noValidate>
          {elements}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
