/* eslint-disable no-param-reassign */
import _ from 'lodash';

/**
 /* Validate form by using the form's validateInput function
 /* to validate the form's inputs values
*/
export function formValidator(inputs, validateInput) {
  const list = Object.keys(inputs);
  const errors = {};

  list.map((name) => {
    const error = validateInput({ name, value: inputs[name].value }, inputs);
    errors[name] = { errors: error };
    return error;
  });

  return {
    isValid: _.isEmpty(list.filter(name => errors[name].errors.isValid === false)),
    errors,
  };
}

/**
 /* Bind current/initial form fields values with data values coming from source
 /* e.g. state, API, etc.
*/
export function bindFormFieldsWithData(formFields, data) {
  const { result } = data;
  if (result) {
    const formFieldsKeys = Object.keys(formFields);
    const dataKeys = Object.keys(result);
    const matchedKeys = _.filter(dataKeys, key => formFieldsKeys.includes(key));

    for (let i = 0; i < matchedKeys.length; i += 1) {
      formFields[matchedKeys[i]].value = result[matchedKeys[i]];
    }
  }
  return Object.assign({}, formFields);
}
