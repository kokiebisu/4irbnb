const shared = {
  wrapper: {
    display: "inline-block",
  },
};

const theme = {
  wrapper: {
    bg: "transparent",
  },
  label: {
    unselected: {
      color: "grey.400",
    },
  },
};

const web = {
  wrapper: { ...shared.wrapper },
};

const mobile = {
  wrapper: { ...shared.wrapper },
};

export const underline = {
  web,
  mobile,
  theme,
};
