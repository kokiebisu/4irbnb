/**
 * Birthdate Input
 */
export const styleInput = (errors, fieldActive) => {
  if (errors && fieldActive) {
    return { bg: 'white' };
  }
  if (errors) {
    return { bg: '#fef8f6' };
  }
  return {
    backgroundColor: 'white',
    '::placeholder': {
      color: 'rgb(104, 104, 104)',
    },
  };
};

export const styleLabel = (errors, fieldActive) => {
  const mixin = (top, color, fontWeight) => {
    return {
      position: 'absolute',
      transition: 'all 150ms ease-in',
      fontSize: 13,
      top,
      color,
      fontWeight,
    };
  };
  if (errors && fieldActive) {
    return {
      ...mixin(9, 'red.500', 500),
    };
  }
  if (errors) {
    return {
      ...mixin(9, 'red.500', 500),
    };
  }
  return {
    ...mixin(7, 'grey.500', 300),
  };
};

export const styleContainer = (errors, fieldActive, direction) => {
  const mixin = (borderWidth, borderColor) => {
    return {
      borderRadius: 8,
      border: `${borderWidth}px solid`,
      borderColor,
    };
  };
  if (errors && fieldActive) {
    return {
      ...mixin(1, 'red.500'),
    };
  }
  if (errors) {
    if (direction === 'left') {
      return {
        borderLeftTopRadius: 8,
        borderLeftBottomRadius: 8,
        border: '1px solid',
        borderColor: 'black',
      };
    }
    if (direction === 'right') {
      return {
        borderRightTopRadius: 8,
        borderRightBottomRadius: 8,
        border: '1px solid',
        borderColor: 'black',
      };
    }
    return {
      border: '1px solid',
      borderColor: 'black',
    };
  }
  if (fieldActive) {
    return {
      ...mixin(2, 'black'),
    };
  }
  return {
    ...mixin(1, 'black'),
  };
};
