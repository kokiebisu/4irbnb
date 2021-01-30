const shared = {
  wrapper: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    wrapper: {},
  },
  label: {
    wrapper: {},
    text: {},
  },
};

export const theme = {
  wrapper: {
    bg: "transparent",
  },
  label: {
    text: {
      fontSize: 15,
      color: "cyan.800",
    },
  },
};

export const web = {
  wrapper: { ...shared.wrapper },
  icon: {
    wrapper: { ...shared.icon.wrapper },
  },
  label: {
    wrapper: { ...shared.label.wrapper },
    text: { ...shared.label.text },
  },
};

export const mobile = {
  wrapper: { ...shared.wrapper },
  icon: {
    wrapper: { ...shared.icon.wrapper },
  },
  label: {
    wrapper: { ...shared.label.wrapper },
    text: { ...shared.label.text },
  },
};
