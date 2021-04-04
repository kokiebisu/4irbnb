import input from "@input/input.module.scss";
import shape from "@styles/shape.module.scss";

/**
 * Birthdate Input
 */
export const styleInput = (errors, fieldActive) => {
  if (errors && fieldActive) {
    return [input["select-input__error--active"]].join(" ");
  }
  if (errors) {
    return [input["select-input__error--inactive"]].join(" ");
  }
  return [input["select-input__active"]].join(" ");
};

export const styleLabel = (errors, fieldActive) => {
  if (errors && fieldActive) {
    return [input["select-label__error"]].join(" ");
  }
  if (errors) {
    return [input["select-label__error"]].join(" ");
  }
  return [input["select-label__active"]].join(" ");
};

export const styleContainer = (errors, fieldActive, direction) => {
  if (errors && fieldActive) {
    return [input["select-container__error--active"]].join(" ");
  }
  if (errors) {
    if (direction === "left") {
      return [input["select-container__error--inactive"], shape["blr--8"]].join(
        " "
      );
    }
    if (direction === "right") {
      return [input["select-container__error--inactive"], shape["brr--8"]].join(
        " "
      );
    }
    return [input["select-container__error--inactive"]].join(" ");
  }
  if (fieldActive) {
    return [input["select-container__active"]].join(" ");
  }
};
