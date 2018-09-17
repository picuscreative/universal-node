import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import errorList from './errors';

export default function (data, previousData) {
  const { name, value } = data;
  const error = {};

  switch (name) {
    case 'name':
      if (!value || Validator.isEmpty(value)) {
        error.message = errorList.realNameEmptyValue;
      }
      break;
    case 'email':
      if (!value || Validator.isEmpty(value)) {
        error.message = errorList.emailEmptyValue;
      } else if (!Validator.isEmail(value)) {
        error.message = errorList.emailIncorrectFormat;
      }
      break;
    case 'newEmail':
      if (!Validator.isEmpty(value) && !Validator.isEmail(value)) {
        error.message = errorList.emailIncorrectFormat;
      }
      break;
    case 'repeatEmail':
      if (value !== previousData.newEmail.value) {
        error.message = errorList.emailsNotEqualValue;
      } else if (!Validator.isEmpty(value) && !Validator.isEmail(value)) {
        error.message = errorList.emailIncorrectFormat;
      }
      break;
    case 'password':
      if (!Validator.isEmpty(value) && !Validator.isLength(value, { min: 10 })) {
        error.message = errorList.passwordEmptyValue;
      }
      break;
    case 'newPassword':
      if (!Validator.isEmpty(previousData.password.value) && Validator.isEmpty(value)) {
        error.message = errorList.newPasswordEmptyValue;
      } else if (
        !Validator.isEmpty(previousData.password.value) &&
        Validator.isEmpty(value) &&
        !Validator.isLength(value, { min: 10 })
      ) {
        error.message = errorList.passwordsMinCharacters;
      }
      break;
    case 'repeatPassword':
      if (value !== previousData.newPassword.value) {
        error.message = errorList.passwordsNotEqualValue;
      } else if (!Validator.isEmpty(value) && !Validator.isLength(value, { min: 10 })) {
        error.message = errorList.passwordsMinCharacters;
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
