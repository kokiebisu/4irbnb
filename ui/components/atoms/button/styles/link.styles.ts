const shared = {
  label: {
    text: {
      fontSize: 14,
    },
  },
};

const web = {
  label: {
    text: {
      ...shared.label.text,
    },
  },
};

const theme = {};

export const link = { web, theme };
