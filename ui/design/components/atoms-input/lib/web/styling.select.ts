/**
 * Birthdate Input
 */
export const styleInput = (errors, fieldActive) => {
  if (errors && fieldActive) {
    return { bg: "white" };
  }
  if (errors) {
    return { bg: "#fef8f6" };
  }
  return {
    backgroundColor: "white",
    "::placeholder": {
      color: "rgb(104, 104, 104)",
    },
  };
};

export const styleLabel = (errors, fieldActive) => {
  if (errors && fieldActive) {
    return {
      position: "absolute",
      transition: "all 150ms ease-in",
      fontSize: 13,
      top: 9,
      color: "#c13514 !important",
      fontWeight: 500,
    };
  }
  if (errors) {
    return {
      position: "absolute",
      transition: "all 150ms ease-in",
      fontSize: 13,
      top: 9,
      color: "#c13514 !important",
      fontWeight: 500,
    };
  }
  return {
    position: "absolute",
    transition: "all 150ms ease-in",
    fontSize: 13,
    top: 7,
    color: "gray !important",
  };
};

// export const styleContainer = (errors, fieldActive, direction) => {
//   if (errors && fieldActive) {
//     return [input["select-container__error--active"]].join(" ");
//   }
//   if (errors) {
//     if (direction === "left") {
//       return [input["select-container__error--inactive"], shape["blr--8"]].join(
//         " "
//       );
//     }
//     if (direction === "right") {
//       return [input["select-container__error--inactive"], shape["brr--8"]].join(
//         " "
//       );
//     }
//     return [input["select-container__error--inactive"]].join(" ");
//   }
//   if (fieldActive) {
//     return [input["select-container__active"]].join(" ");
//   }
// };
