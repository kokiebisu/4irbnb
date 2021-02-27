const shared = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 0',
  },
  icon: {
    wrapper: {
      marginRight: '16px',
    },
  },
  title: {
    wrapper: {},
    text: {
      fontSize: '15px',
    },
  },
  guests: {
    text: {
      fontSize: '10px',
      color: 'grey.500',
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
  title: {
    wrapper: { ...shared.title.wrapper },
    text: { ...shared.title.text },
  },
  guests: {
    text: { ...shared.guests.text },
  },
};

const theme = {};

export { web, theme };
