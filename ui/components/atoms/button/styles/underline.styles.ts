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
      color: "white__3",
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
