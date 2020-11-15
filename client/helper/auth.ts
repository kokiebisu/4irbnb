import { checkEmail } from './regex';

export const validateSignup = (values) => {
  const errors: any = {};
  console.log('entered', values);
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!checkEmail(values.email)) {
    errors.email = 'Enter a valid email.';
  }

  return errors;
};
