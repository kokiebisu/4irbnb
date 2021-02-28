/**
 * Inputs
 * @param errors
 * @param fieldActive
 * @param value
 */
export const styleInput = (errors, fieldActive, value) => {
  if (errors && fieldActive && value) {
    return {
      bg: 'white',
      '::placeholder': { color: 'grey.700' },
    };
  }
  if (errors && value) {
    return {
      bg: 'white',
      '::placeholder': { color: 'grey.700' },
    };
  }
  if (errors && fieldActive) {
    return { bg: 'white' };
  }
  if (errors) {
    return { bg: '#fef8f6' };
  }
  return { fontWeight: 300, color: 'grey.900' };
};

/**
 * Labels
 * @param errors
 * @param fieldActive
 * @param value
 */
export const styleLabel = (errors, fieldActive, evaluate, value) => {
  const mixin = (fontSize, top, color, fontWeight) => {
    return {
      transition: 'all 150ms ease-in',
      fontSize,
      top,
      color,
      fontWeight,
      position: 'absolute',
    } as const;
  };
  if (errors && fieldActive && evaluate) {
    return mixin(16, 12, 'grey.600', 300);
  }
  if (errors && fieldActive) {
    return mixin(13, 2, 'red.500', 500);
  }
  if (errors && evaluate) {
    return mixin(13, 2, 'grey.500', 500);
  }
  if (errors) {
    return mixin(13, 2, 'red.500', 500);
  }
  if (fieldActive || value) {
    return mixin(13, 1, 'grey.600', 300);
  }
  return mixin(16, 15, 'grey.600', 300);
};

/**
 * Containers
 * @param errors
 * @param fieldActive
 * @param value
 */
export const styleContainer = (errors, fieldActive, value) => {
  const mixin = (borderWidth, borderColor, bg = 'white') => {
    return {
      border: `${borderWidth}px solid`,
      borderColor,
      bg,
      borderRadius: 10,
    };
  };
  if (errors && fieldActive && value) {
    return mixin(2, 'black');
  }
  if (errors && fieldActive) {
    return mixin(2, 'red.500');
  }
  if (errors && value) {
    return mixin(2, 'red.500');
  }
  if (errors) {
    return mixin(1, 'red.500', 'red.50');
  }
  if (fieldActive) {
    return mixin(2, 'black');
  }
  return mixin(1, 'grey.500');
};
