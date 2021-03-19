const shared = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    wrapper: {},
  },
  label: {
    wrapper: {},
    text: {},
  },
};

const theme = {
  wrapper: {
    bg: 'transparent',
  },
  label: {
    text: {
      fontSize: 15,
      color: 'cyan.800',
    },
  },
};

const web = {
  wrapper: { ...shared.wrapper },
  icon: {
    wrapper: { ...shared.icon.wrapper },
  },
  label: {
    wrapper: { ...shared.label.wrapper },
    text: { ...shared.label.text },
  },
};

const mobile = {
  wrapper: { ...shared.wrapper },
  icon: {
    wrapper: { ...shared.icon.wrapper },
  },
  label: {
    wrapper: { ...shared.label.wrapper },
    text: { ...shared.label.text },
  },
};

export { theme, web };
