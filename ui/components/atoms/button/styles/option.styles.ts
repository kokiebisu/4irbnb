const condition = {
  bold: {
    text: {
      fontWeight: 500,
    },
  },
  plain: {
    text: {
      fontWeight: 300,
    },
  },
};

const shared = {
  wrapper: {
    fontSize: "13px",
    bg: "white",
    padding: "10px 14px",
    display: "block",
    "&:hover": {
      bg: "white__1",
    },
  },
  ...condition,
};

const web = {
  wrapper: { ...shared.wrapper },
  ...condition,
};

const theme = {};

export const option = { web, theme };
