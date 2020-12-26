import shape from "@styles/shape.module.scss";
import color from "@styles/color.module.scss";
import space from "@styles/space.module.scss";
import { useReducer } from "react";

export const checkInBorder = (selected) => {
  if (selected.checkin) {
  } else if (selected.checkout) {
  } else if (selected.guests) {
    return [
      shape["w--50p"],
      shape["btlr--6"],
      color["b-l--white__3"],
      color["b-r--white__3"],
      color["b-t--white__3"],
      space["p-v--10"],
    ].join(" ");
  }
  return [
    shape["w--50p"],
    shape["btlr--6"],
    color["b-l--white__3"],
    color["b-r--white__3"],
    color["b-b--white__3"],
    color["b-t--white__3"],
    space["p-v--10"],
  ].join(" ");
};

export const checkOutBorder = (selected) => {
  if (selected.checkin) {
  } else if (selected.checkout) {
  } else if (selected.guests) {
    return [
      shape["w--50p"],
      shape["btrr--6"],
      color["b-r--white__3"],
      color["b-t--white__3"],
      space["p-v--10"],
    ].join(" ");
  }
  return [
    shape["w--50p"],
    shape["btrr--6"],
    color["b-r--white__3"],
    color["b-b--white__3"],
    color["b-t--white__3"],
    space["p-v--10"],
  ].join(" ");
};

export const guestBorder = (selected) => {
  if (selected.checkin) {
    return [
      shape["h--full"],
      color["b-t--transparent"],
      color["b-b--transparent"],
      color["b-l--transparent"],
      color["b-r--transparent"],
      space["p-v--12"],
      shape["w--full"],
      shape["bbr--6"],
      color["bg--transparent"],
    ].join(" ");
  } else if (selected.checkout) {
  } else if (selected.guests) {
    return [
      shape["h--full"],
      color["b--gray__3"],
      space["p-v--12"],
      shape["br--6"],
    ].join(" ");
  }
  return [
    shape["h--full"],
    color["b-t--transparent"],
    color["b-b--transparent"],
    color["b-l--transparent"],
    color["b-r--transparent"],
    space["p-v--12"],
    shape["w--full"],
    shape["bbr--6"],
    color["bg--transparent"],
  ].join(" ");
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
