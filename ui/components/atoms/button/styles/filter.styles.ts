const condition = {
  inverse: {
    wrapper: {
      border: "1px solid",
      borderColor: "gray__1",
      "&:hover": {
        border: "1px solid",
        borderColor: "black",
      },
    },
  },
  plain: {
    wrapper: {
      border: "1px solid",
      borderColor: "transparent",
      bg: "white__1",
    },
  },
};

const shared = {
  wrapper: {
    // whiteSpace: "no-wrap",
    // padding: "8px 14px",
    borderRadius: 20,
  },
  label: {
    text: {
      fontSize: 15,
    },
  },
};

const web = {
  wrapper: { ...shared.wrapper },
  label: {
    text: {
      ...shared.label.text,
    },
  },
  ...condition,
};

const theme = {
  ...condition,
};

export const filter = { web, theme };
