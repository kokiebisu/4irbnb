const shared = {
  wrapper: {},
  label: {
    text: {
      color: 'white',
    },
    loading: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
};

const web = {
  wrapper: { ...shared.wrapper },
  label: {
    text: {
      ...shared.label.text,
    },
    loading: {
      ...shared.label.loading,
    },
  },
};

const theme = {};

export { web, theme };
