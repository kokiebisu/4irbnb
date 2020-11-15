import { checkEmail } from 'helper/regex';
import input from './input.module.scss';

export const styleInput = (value, fieldActive) => {
  if (value && checkEmail(value) && fieldActive) {
    return [input['input__active']].join(' ');
  }
  if (value && checkEmail(value)) {
    return [input['input__inactive']].join(' ');
  }
  if (value && fieldActive) {
    return [input['input__error--active']].join(' ');
  }
  if (value) {
    return [input['input__error--inactive']].join(' ');
  }
};

export const styleLabel = (value, fieldActive) => {
  // Doesn't have the @ but there is value
  if (!checkEmail(value) && value) {
    return [input['label__error']].join(' ');
  }
  if (fieldActive || value) {
    return [input['label__active']].join(' ');
  }
};

export const styleContainer = (value, fieldActive) => {
  // when it is focused and there is value and @
  if (value && checkEmail(value) && fieldActive) {
    return [input['container__active']].join(' ');
  }
  if (value && checkEmail(value)) {
    return [input['container__inactive']].join(' ');
  }
  if (value && fieldActive) {
    return [input['container__error--active']].join(' ');
  }
  if (value) {
    return [input['container__error--inactive']].join(' ');
  }
};
