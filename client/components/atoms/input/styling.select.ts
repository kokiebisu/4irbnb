import input from './input.module.scss';

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
