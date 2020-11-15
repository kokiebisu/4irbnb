import { checkEmail } from '../../../helper/regex';
import input from './input.module.scss';

export const styleEmailInput = (value, fieldActive) => {
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

export const styleEmailLabel = (value, fieldActive) => {
  // Doesn't have the @ but there is value
  if (!checkEmail(value) && value) {
    return [input['label__error']].join(' ');
  }
  if (fieldActive || value) {
    return [input['label__active']].join(' ');
  }
};

export const styleEmailContainer = (value, fieldActive) => {
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

/**
 * Name Input
 */
export const styleNameInput = (errors, value, fieldActive) => {
  if (errors && value) {
    return [input['input__active']].join(' ');
  }
  if (errors && fieldActive) {
    return [input['input__active']].join(' ');
  }
  if (errors) {
    return [input['input__error--inactive']].join(' ');
  }
};

export const styleNameLabel = (errors, value, fieldActive) => {
  if (errors && value) {
    return [input['label__active']].join(' ');
  }
  if (errors) {
    return [input['label__error']].join(' ');
  }
  if (fieldActive || value) {
    return [input['label__active']].join(' ');
  }
};

export const styleNameContainer = (errors, fieldActive, value) => {
  if (errors && fieldActive && value) {
    return [input['container__active']].join(' ');
  }
  if (errors && fieldActive) {
    return [input['container__error--active']].join(' ');
  }
  if (errors && value) {
    return [input['container__inactive']].join(' ');
  }
  if (errors) {
    return [input['container__error--inactive']].join(' ');
  }
  if (value || fieldActive) {
    return [input['container__active']].join(' ');
  }
};
