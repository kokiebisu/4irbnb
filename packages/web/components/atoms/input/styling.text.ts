import input from "@input/input.module.scss";

/**
 * Inputs
 * @param errors
 * @param fieldActive
 * @param value
 */
export const styleInput = (errors, fieldActive, value) => {
  if (errors && fieldActive && value) {
    return [input["input__active"]].join(" ");
  }
  if (errors && value) {
    return [input["input__inactive"]].join(" ");
  }
  if (errors && fieldActive) {
    return [input["input__error--active"]].join(" ");
  }
  if (errors) {
    return [input["input__error--inactive"]].join(" ");
  }
  return "";
};

/**
 * Labels
 * @param errors
 * @param fieldActive
 * @param value
 */
export const styleLabel = (errors, fieldActive, evaluate, value) => {
  if (errors && fieldActive && evaluate) {
    return [input["label__active"]].join(" ");
  }
  if (errors && fieldActive) {
    return [input["label__error"]].join(" ");
  }
  if (errors && evaluate) {
    return [input["label__active"]].join(" ");
  }
  if (errors) {
    return [input["label__error"]].join(" ");
  }
  if (fieldActive || value) {
    return [input["label__active"]].join(" ");
  }
  return "";
};

/**
 * Containers
 * @param errors
 * @param fieldActive
 * @param value
 */
export const styleContainer = (errors, fieldActive, value) => {
  if (errors && fieldActive && value) {
    return [input["container__active"]].join(" ");
  }
  if (errors && fieldActive) {
    return [input["container__error--active"]].join(" ");
  }
  if (errors && value) {
    return [input["container__inactive"]].join(" ");
  }
  if (errors) {
    return [input["container__error--inactive"]].join(" ");
  }
  if (fieldActive) {
    return [input["container__active"]].join(" ");
  }
  return "";
};
