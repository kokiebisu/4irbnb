import { useReducer } from "react";

export const checkInBorder = (selected) => {
  if (selected.checkin) {
  } else if (selected.checkout) {
  } else if (selected.guests) {
    return {
      width: "50%",
      borderTopLeftRadius: 6,
      borderLeft: "1px solid grey.400",
      borderRight: "1px solid grey.400",
      borderTop: "1px solid grey.400",
      padding: "10px 0",
    };
  }
  return {
    width: "50%",
    borderTopLeftRadius: 6,
    border: "1px solid grey.400",
    padding: "10px 0",
  };
};

export const checkOutBorder = (selected) => {
  if (selected.checkin) {
  } else if (selected.checkout) {
  } else if (selected.guests) {
    return {
      width: "50%",
      borderTopRightRadius: 6,
      borderRight: "1px solid grey.400",
      borderTop: "1px solid grey.400",
      padding: "10px 0",
    };
  }
  return {
    width: "50%",
    borderTopRightRadius: 6,
    borderRight: "1px solid grey.400",
    borderBottom: "1px solid grey.400",
    borderTop: "1px solid grey.400",
    padding: "10px 0",
  };
};

export const guestBorder = (selected) => {
  if (selected.checkin) {
    return {
      height: "100%",
      border: "1px solid transparent",
      padding: "12px 0",
      width: "100%",
      borderBottomLeftRadius: 6,
      borderBottomRightRadius: 6,
      bg: "transparent",
    };
  } else if (selected.checkout) {
  } else if (selected.guests) {
    return {
      height: "100%",
      border: "1px solid grey.800",
      padding: "12px 0",
      borderRadius: 6,
    };
  }
  return {
    height: "100%",
    border: "1px solid transparent",
    padding: "12px 0",
    width: "100%",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    bg: "transparent",
  };
};

export const useCheckin = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "guests":
        return { ...state, guests: !state.guests };
      case "checkout":
        return { ...state, checkout: !state.checkout };
      case "checkin":
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
