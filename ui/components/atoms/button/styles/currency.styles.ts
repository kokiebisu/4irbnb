const shared = {
  wrapper: {
    padding: "12px",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "white__1",
    },
  },
  title: {
    text: {
      fontSize: "14px",
      color: "black",
    },
  },
  subtitle: {
    text: {
      fontSize: "14px",
      color: "gray__1",
    },
  },
};

const web = {
  wrapper: { ...shared.wrapper },
  title: {
    text: { ...shared.title.text },
  },
  subtitle: {
    text: { ...shared.subtitle.text },
  },
};

const theme = {};

export const currency = { web, theme };
