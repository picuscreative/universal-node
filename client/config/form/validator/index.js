import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import errorList from './errors';

export default function (data) {
  const { name, value } = data;
  const error = {};

  switch (name) {
    case 'email':
      if (!value) {
        error.message = errorList.emailEmptyValue;
      } else if (!Validator.isEmail(value)) {
        error.message = errorList.emailIncorrectFormat;
      }
      break;

    default:
      break;
  }

  return {
    error: error.message,
    isValid: isEmpty(error),
  };
}
