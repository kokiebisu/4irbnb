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
    return 'bg-red-50';
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
    return 'transition-input absolute text-xs top-2 text-gray-500';
  }
  return 'transition-input top-4 text-base text-gray-400';
};

/**
 * Containers
 * @param errors
 * @param fieldActive
 * @param value
 */
export const styleContainer = (errors, fieldActive, value, direction) => {
  if (errors && fieldActive && value) {
    switch (direction) {
      case 'top':
        return 'border-b-2 border-l-2 border-r-2 rounded-b-lg';
      case 'bottom':
        return 'border-t-2 border-l-2 border-r-2 rounded-t-lg';
      default:
        return 'border-2 border-gray-400 rounded-lg';
    }
  }
  if (errors && fieldActive) {
    switch (direction) {
      case 'top':
        return 'border-2 border-red-500 bg-white rounded-b-lg';
      case 'bottom':
        return 'border-2 border-red-500 bg-white rounded-t-lg';
      default:
        return 'border-2 border-red-500 bg-white rounded-lg';
    }
  }
  if (errors && value) {
    switch (direction) {
      case 'top':
        return 'border-b border-l border-r rounded-b-lg bg-white';
      case 'bottom':
        return 'border-t border-l border-r rounded-t-lg bg-white';
      default:
        return 'border border-gray-400 rounded-lg bg-white';
    }
  }
  if (errors) {
    switch (direction) {
      case 'top':
        return 'border-b border-l border-r rounded-b-lg border-red-500 bg-red-50';
      case 'bottom':
        return 'border-t border-l border-r rounded-t-lg border-red-500 bg-red-50';
      default:
        return 'border border-gray-400 rounded-lg border-red-500 bg-red-50';
    }
  }
  if (fieldActive) {
    switch (direction) {
      case 'top':
        return 'border-2 border-black rounded-b-lg';
      case 'bottom':
        return 'border-2 border-black rounded-t-lg';
      default:
        return 'border-2 border-black rounded-lg';
    }
  }
  switch (direction) {
    case 'top':
      return 'border rounded-b-lg border-gray-400';
    case 'bottom':
      return 'border-t border-l border-r border-gray-400 rounded-t-lg';
    default:
      return 'border border-gray-400 rounded-lg';
  }
};
