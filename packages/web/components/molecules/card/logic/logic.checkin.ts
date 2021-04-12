import { useReducer } from 'react';

export const checkInBorder = (selected) => {
  if (selected.checkin) {
  } else if (selected.checkout) {
  } else if (selected.guests) {
    return 'py-3 border-t border-r border-l rounded-tl-md w-1/2 border-gray-800';
  }
  return 'w-1/2 rounded-tl-md border border-gray-300 py-3';
};

export const checkOutBorder = (selected) => {
  if (selected.checkin) {
  } else if (selected.checkout) {
  } else if (selected.guests) {
    return 'w-1/2 rounded-tr-md border-r border-t border-gray-300 py-3';
  }
  return 'w-1/2 rounded-tr-md border-r border-b border-t border-gray-300 py-3';
};

export const guestBorder = (selected) => {
  if (selected.checkin) {
    return 'h-full border border-transparent py-3 w-full rounded-b-md bg-transparent';
  } else if (selected.checkout) {
  } else if (selected.guests) {
    return 'h-full border border-gray-800 py-4 rounded-md';
  }
  return 'h-full border border-transparent py-3 w-full rounded-b-md bg-transparent';
};

export const useCheckin = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'guests':
        return { ...state, guests: !state.guests };
      case 'checkout':
        return { ...state, checkout: !state.checkout };
      case 'checkin':
        return { ...state, checkin: !state.checkin };
      default:
        return state;
    }
  };
  const [selected, dispatchSelected] = useReducer(reducer, {
    checkin: false,
    checkout: false,
    guests: false,
  });

  return [selected, dispatchSelected];
};
