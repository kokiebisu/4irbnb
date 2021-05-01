import input from '@input/input.module.scss';

/**
 * Birthdate Input
 */
export const styleInput = (errors, fieldActive) => {
  if (errors && fieldActive) {
    return 'bg-white';
  }
  if (errors) {
    return 'bg-gray-100';
  }
  return 'bg-white placeholder-gray-200';
};

export const styleLabel = (errors, fieldActive) => {
  if (errors && fieldActive) {
    return 'absolute transition text-sm top-2 text-red-600 font-medium';
  }
  if (errors) {
    return 'absolute transition text-sm top-2 text-red-600 font-medium';
  }
  return 'absolute transition text-sm top-2 text-gray-500';
};

export const styleContainer = (errors, fieldActive, direction) => {
  if (errors && fieldActive) {
    return [input['select-container__error--active']].join(' ');
  }
  if (errors) {
    if (direction === 'left') {
      return `rounded-l-lg ${[input['select-container__error--inactive']].join(
        ' '
      )}`;
    }
    if (direction === 'right') {
      return `rounded-r-lg ${[input['select-container__error--inactive']].join(
        ' '
      )}`;
    }
    return [input['select-container__error--inactive']].join(' ');
  }
  if (fieldActive) {
    return 'border-2 border-black';
  }
};
