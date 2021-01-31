const shared = {
  wrapper: {
    display: "flex",
    alignItems: "center",
  },
  label: {
    text: {
      fontSize: "15px",
      fontWeight: 500,
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

export const expand = {
  web,
  theme,
};
