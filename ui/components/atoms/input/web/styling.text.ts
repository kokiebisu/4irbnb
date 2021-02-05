/**
 * Inputs
 * @param errors
 * @param fieldActive
 * @param value
 */
export const styleInput = (errors, fieldActive, value) => {
  if (errors && fieldActive && value) {
    return { bg: "white", "::placeholder": { color: "rgb(104, 104, 104)" } };
  }
  if (errors && value) {
    return { bg: "white", "::placeholder": { color: "rgb(104, 104, 104)" } };
  }
  if (errors && fieldActive) {
    return { bg: "white" };
  }
  if (errors) {
    return { bg: "#fef8f6" };
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
    return {
      position: "absolute",
      transition: "all 150ms ease-in",
      fontSize: 16,
      top: 12,
    };
  }
  if (errors && fieldActive) {
    return {
      position: "absolute",
      transition: "all 150ms ease-in",
      fontSize: 13,
      top: 2,
      color: "#c13514 !important",
      fontWeight: 500,
    };
  }
  if (errors && evaluate) {
    return {
      position: "absolute",
      transition: "all 150ms ease-in",
      fontSize: 13,
      top: 2,
      color: " gray !important",
    };
  }
  if (errors) {
    return {
      position: "absolute",
      transition: "all 150ms ease-in",
      fontSize: 13,
      top: 2,
      color: "#c13514 !important",
      fontWeight: 500,
    };
  }
  if (fieldActive || value) {
    return {
      position: "absolute",
      transition: "all 150ms ease-in",
      fontSize: 13,
      top: 2,
      color: "gray !important",
    };
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
    return {};
    // return [input["container__active"]].join(" ");
  }
  if (errors && fieldActive) {
    return {};
    // return [input["container__error--active"]].join(" ");
  }
  if (errors && value) {
    return {};
    // return [input["container__inactive"]].join(" ");
  }
  if (errors) {
    return {};
    // return [input["container__error--inactive"]].join(" ");
  }
  if (fieldActive) {
    return {};
    // return [input["container__active"]].join(" ");
  }
  return {};
};
