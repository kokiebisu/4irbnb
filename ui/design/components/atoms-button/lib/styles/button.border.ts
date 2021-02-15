const shared = {
  wrapper: {},
  label: {
    text: {
      color: "white",
    },
  },
};

const web = {
  wrapper: { ...shared.wrapper },
  label: {
    text: { ...shared.label.text },
  },
};

const theme = {};

export { web, theme };
