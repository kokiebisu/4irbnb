const condition = {
  selected: {
    wrapper: {
      color: "black",
    },
  },
};

const shared = {
  wrapper: {
    padding: "12px",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "white__1",
    },
  },
  language: {
    text: {
      fontSize: "14px",
      color: "black",
    },
  },
  region: {
    text: {
      fontSize: "14px",
      color: "gray__1",
    },
  },
  ...condition,
};

const web = {
  wrapper: { ...shared.wrapper },
  language: { text: { ...shared.language.text } },
  region: { text: { ...shared.region.text } },
  ...condition,
};

const theme = {};

export const globe = {
  web,
  theme,
};
