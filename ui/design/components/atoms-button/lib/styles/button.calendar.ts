const shared = {
  wrapper: {
    width: "42px",
    height: "42px",
  },
  label: {
    wrapper: {
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "9999px",
    },
    text: {
      fontSize: "12px",
      color: "grey.300",
    },
  },
  disabled: {
    label: {
      wrapper: {
        "&:hover": {
          backgroundColor: "black",
          transition: "0.4s all",
        },
      },
      text: {
        color: "black",
      },
    },
  },
};

const web = {
  wrapper: { ...shared.wrapper },
  label: {
    wrapper: { ...shared.label.wrapper },
    text: { ...shared.label.text },
  },
  disabled: {
    label: {
      wrapper: { ...shared.disabled.label.wrapper },
      text: { ...shared.disabled.label.text },
    },
  },
};

const theme = {};

export { web, theme };
