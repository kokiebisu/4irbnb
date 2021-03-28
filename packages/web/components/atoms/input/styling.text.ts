import input from '@input/input.module.scss';

/**
 * Inputs
 * @param errors
 * @param fieldActive
 * @param value
 */
export const styleInput = (errors, fieldActive, value) => {
  if (errors && fieldActive && value) {
    return 'bg-white placeholder-gray-300';
  }
  if (errors && value) {
    return 'bg-white placeholder-gray-300';
  }
  if (errors && fieldActive) {
    return 'bg-white';
  }
  if (errors) {
    return 'bg-gray-100';
  }
  return '';
};

/**
 * Labels
 * @param errors
 * @param fieldActive
 * @param value
 */
export const styleLabel = (errors, fieldActive, evaluate, value) => {
  if (errors && fieldActive && evaluate) {
    return 'absolute text-sm top-0.5 text-gray-500';
  }
  if (errors && fieldActive) {
    return 'absolute text-sm top-0.5 text-red-500 font-medium';
  }
  if (errors && evaluate) {
    return 'absolute text-sm top-0.5 text-gray-500';
  }
  if (errors) {
    return 'absolute text-sm top-0.5 text-red-500 font-medium';
  }
  if (fieldActive || value) {
    return 'absolute text-sm top-0.5 text-gray-500';
  }
  return 'top-4 text-base text-gray-400';
};

/**
 * Containers
 * @param errors
 * @param fieldActive
 * @param value
 */
export const styleContainer = (errors, fieldActive, value) => {
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
  if (fieldActive) {
    return [input['container__active']].join(' ');
  }
  return '';
};
