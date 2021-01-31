const shared = {
  wrapper: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    wrapper: {
      marginRight: "8px",
    },
  },
};

const web = {
  wrapper: { ...shared.wrapper },
  icon: {
    wrapper: {
      ...shared.icon.wrapper,
    },
  },
};

const theme = {};

export const report = {
  web,
  theme,
};
