const shared = {
  wrapper: {
    padding: "3px",
    border: "1px solid",
    borderColor: "transparent",
    borderRadius: 10,
    "&:hover": {
      borderColor: "grey.900",
    },
  },
  label: {
    wrapper: {
      border: "1px solid",
      borderColor: "grey.400",
      padding: "10px 15px",
      borderRadius: "10px",
    },
    text: {
      fontSize: "12px",
    },
  },
};

const web = {
  wrapper: { ...shared.wrapper },
  label: {
    wrapper: {
      ...shared.label.wrapper,
    },
    text: {
      ...shared.label.text,
    },
  },
};

const theme = {};

export const nearby = {
  web,
  theme,
};
