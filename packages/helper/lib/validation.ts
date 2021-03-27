import { emailRegex } from './regex';

export const validateEmail = (value) => {
  const re = emailRegex;
  return re.test(String(value).toLowerCase());
};

export const validatePassword = (value) => {
  if (value && value.length && value.length > 8) {
    return true;
  }
  return false;
};

export const validateAuth = (values) => {
  const errors: any = {};
  if (!values.phone) {
    errors.phone = 'Phone number is required';
  }
  if (!values.region) {
    errors.region = 'Region is required';
  }
  return errors;
};

export const validateSignup = (values) => {
  const errors: any = {};
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!validateEmail(values.email)) {
    errors.email = 'Enter a valid email.';
  }
  if (!values.firstname) {
    errors.firstname = 'First name is required';
  }
  if (!values.lastname) {
    errors.lastname = 'Last name is required';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  }
  if (parseInt(values.year) > 2002) {
    errors.year = 'You must be older that 18';
  }

  return errors;
};

export const validateLogin = (values) => {
  const errors: any = {};
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!validateEmail(values.email)) {
    errors.email = 'Enter a valid email.';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  }

  return errors;
};

export const validateExists = (values) => {
  const errors: any = {};

  if (!values.password) {
    errors.password = 'Password is required';
  }

  return errors;
};

export const validateForgotPassword = (values) => {
  const errors: any = {};
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!validateEmail(values.email)) {
    errors.email = 'Enter a valid email.';
  }

  return errors;
};
