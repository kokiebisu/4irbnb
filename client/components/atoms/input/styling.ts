import { checkEmail, checkPassword } from '../../../helper/auth';
import input from './input.module.scss';

/**
 * Email Input
 */
export const styleEmailInput = (errors, fieldActive, value) => {
  if (errors && fieldActive && value && checkEmail(value)) {
    return [input['input__active']].join(' ');
  }
  if (errors && value && checkEmail(value)) {
    return [input['input__inactive']].join(' ');
  }
  if (errors && fieldActive) {
    return [input['input__error--active']].join(' ');
  }
  if (errors) {
    return [input['input__error--inactive']].join(' ');
  }
};

export const styleEmailLabel = (errors, fieldActive, value) => {
  if (errors && value && checkEmail(value)) {
    return [input['label__active']].join(' ');
  }
  if (errors && fieldActive) {
    return [input['label__error']].join(' ');
  }
  if (errors) {
    return [input['label__error']].join(' ');
  }
  if (fieldActive || value) {
    return [input['label__active']].join(' ');
  }
};

export const styleEmailContainer = (errors, fieldActive, value) => {
  if (errors && fieldActive && value && checkEmail(value)) {
    return [input['container__active']].join(' ');
  }
  if (errors && value && checkEmail(value)) {
    return [input['container__inactive']].join(' ');
  }
  if (errors && fieldActive) {
    return [input['container__error--active']].join(' ');
  }
  if (errors) {
    return [input['container__error--inactive']].join(' ');
  }
  if (fieldActive) {
    return [input['container__active']].join(' ');
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
  if (errors && value) {
    return [input['container__inactive']].join(' ');
  }
  if (errors && fieldActive) {
    return [input['container__error--active']].join(' ');
  }
  if (errors) {
    return [input['container__error--inactive']].join(' ');
  }
  if (fieldActive) {
    return [input['container__active']].join(' ');
  }
};

/**
 * Password Input
 */
export const stylePasswordInput = (errors, fieldActive, value) => {
  if (errors && fieldActive && checkPassword(value)) {
    return [input['input__active']].join(' ');
  }
  if (errors && checkPassword(value)) {
    return [input['input__inactive']].join(' ');
  }
  if (errors && fieldActive) {
    return [input['input__error--active']].join(' ');
  }
  if (errors) {
    return [input['input__error--inactive']].join(' ');
  }
};

export const stylePasswordLabel = (errors, fieldActive, value) => {
  if (errors && checkPassword(value) && fieldActive) {
    return [input['label__active']].join(' ');
  }
  if (errors && checkPassword(value)) {
    return [input['label__active']].join(' ');
  }
  if (errors && fieldActive) {
    return [input['label__error']].join(' ');
  }
  if (errors) {
    return [input['label__error']].join(' ');
  }
  if (fieldActive || value) {
    return [input['label__active']].join(' ');
  }
};

export const stylePasswordContainer = (errors, fieldActive, value) => {
  if (errors && fieldActive && value && checkPassword(value)) {
    return [input['container__active']].join(' ');
  }
  if (errors && value && checkPassword(value)) {
    return [input['container__inactive']].join(' ');
  }
  if (errors && fieldActive) {
    return [input['container__error--active']].join(' ');
  }
  if (errors) {
    return [input['container__error--inactive']].join(' ');
  }
  if (fieldActive) {
    return [input['container__active']].join(' ');
  }
};

/**
 * Birthdate Input
 */
export const styleBirthYearInput = (errors, fieldActive, value) => {
  if (value) {
    return [input['input__active']].join(' ');
  }
};

export const styleBirthYearLabel = (errors, fieldActive, value) => {
  if (value) {
    return [input['select-label__active']].join(' ');
  }
};

export const styleBirthYearContainer = (errors, fieldActive, value) => {
  if (fieldActive) {
    return [input['container__active']].join(' ');
  }
};

export const styleBirthMonthInput = (errors, fieldActive, value) => {
  if (value) {
    return [input['input__active']].join(' ');
  }
};

export const styleBirthMonthLabel = (errors, fieldActive, value) => {
  if (value) {
    return [input['label__active']].join(' ');
  }
};

export const styleBirthMonthContainer = (errors, fieldActive, value) => {
  if (fieldActive) {
    return [input['container__active']].join(' ');
  }
};

export const styleBirthDayInput = (errors, fieldActive, value) => {
  if (value) {
    return [input['input__active']].join(' ');
  }
  return [input['input__inactive']].join(' ');
};

export const styleBirthDayLabel = (errors, fieldActive, value) => {
  if (value) {
    return [input['select-label__active']].join(' ');
  }
  return [input['select-label__error']].join(' ');
};

export const styleBirthDayContainer = (errors, fieldActive, value) => {
  if (fieldActive) {
    return [input['container__active']].join(' ');
  }
};
