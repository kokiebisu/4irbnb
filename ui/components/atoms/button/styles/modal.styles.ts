const shared = {
  wrapper: {
    bg: "transparent",
    padding: "8px",
    borderRadius: "9999px",
  },
};

const web = {
  wrapper: { ...shared.wrapper },
};

const theme = {
  wrapper: {
    ":hover": {
      bg: "white__1",
    },
  },
};

export const modal = {
  web,
  theme,
};
