const shared = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: "4px",
    width: "50%",
  },
  label: {
    text: {
      marginLeft: "16px",
      fontWeight: 100,
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

export const amenity = {
  web,
  theme,
};
