import input from './input.module.scss';
import shape from '../../../styles/shape.module.scss';

/**
 * Birthdate Input
 */
export const styleInput = (errors, fieldActive, value) => {
  if (errors && fieldActive) {
    return [input['select-input__error--active']].join(' ');
  }
  if (errors) {
    return [input['select-input__error--inactive']].join(' ');
  }
  return [input['select-input__active']].join(' ');
};

export const styleLabel = (errors, fieldActive, value) => {
  if (errors && fieldActive) {
    return [input['select-label__error']].join(' ');
  }
  if (errors) {
    return [input['select-label__error']].join(' ');
  }
  return [input['select-label__active']].join(' ');
};

export const styleContainer = (errors, fieldActive, value, direction) => {
  if (errors && fieldActive) {
    return [input['select-container__error--active']].join(' ');
  }
  if (errors) {
    if (direction === 'left') {
      return [
        input['select-container__error--inactive'],
        shape['blr--15'],
      ].join(' ');
    }
    if (direction === 'right') {
      return [
        input['select-container__error--inactive'],
        shape['brr--15'],
      ].join(' ');
    }
    return [input['select-container__error--inactive']].join(' ');
  }
  if (fieldActive) {
    return [input['select-container__active']].join(' ');
  }
};
