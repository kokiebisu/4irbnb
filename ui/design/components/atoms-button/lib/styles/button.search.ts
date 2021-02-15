const shared = {
  wrapper: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    wrapper: {
      paddingLeft: "14px",
      marginRight: "4px",
    },
  },
  label: {
    text: {
      fontSize: "15px",
    },
  },
};

const web = {
  wrapper: { ...shared.wrapper },
  icon: {
    wrapper: { ...shared.icon.wrapper },
  },
  label: {
    text: { ...shared.label.text },
  },
};

const theme = {
  wrapper: {
    bg: "red.500",
  },
  label: {
    text: {
      color: "white",
    },
  },
};

export const search = {
  web,
  theme,
};
