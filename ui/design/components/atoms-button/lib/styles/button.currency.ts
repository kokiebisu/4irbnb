const shared = {
  wrapper: {
    padding: '12px',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: 'grey.100',
    },
  },
  title: {
    text: {
      fontSize: '14px',
      color: 'black',
    },
  },
  subtitle: {
    text: {
      fontSize: '14px',
      color: 'grey.600',
    },
  },
};

const web = {
  wrapper: { ...shared.wrapper },
  title: {
    text: { ...shared.title.text },
  },
  subtitle: {
    text: { ...shared.subtitle.text },
  },
};

const theme = {};

export { web, theme };
