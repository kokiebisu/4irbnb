const shared = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    wrapper: {
      marginRight: '8px',
    },
  },
  label: {
    text: {
      fontSize: 14,
    },
  },
};

const web = {
  wrapper: { ...shared.wrapper },
  icon: {
    wrapper: {
      ...shared.icon.wrapper,
    },
  },
  label: {
    text: {
      ...shared.label.text,
    },
  },
};

const theme = {};

export { web, theme };
