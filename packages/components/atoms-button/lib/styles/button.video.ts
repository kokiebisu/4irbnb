const shared = {
  wrapper: {
    borderRadius: '9999px',
    padding: '8px',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(5px)',
    },
  },
};

const web = {
  wrapper: {
    ...shared.wrapper,
  },
};

const theme = {};

export { web, theme };
