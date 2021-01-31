const shared = {
  wrapper: {
    padding: "8px 16px",
    borderRadius: "6px",
  },
};

const theme = {
  wrapper: {
    bg: "transparent",
  },
};

const web = {
  wrapper: { ...shared.wrapper },
};

export const banner = {
  web,
  theme,
};
