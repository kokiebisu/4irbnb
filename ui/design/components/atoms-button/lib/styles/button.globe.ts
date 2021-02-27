const condition = {
  selected: {
    wrapper: {
      color: 'black',
    },
  },
};

const shared = {
  wrapper: {
    padding: 12,
    borderRadius: 8,
    '&:hover': {
      bg: 'grey.100',
    },
  },
  language: {
    text: {
      fontSize: '14px',
      color: 'black',
    },
  },
  region: {
    text: {
      fontSize: '14px',
      color: 'grey.600',
    },
  },
  ...condition,
};

const web = {
  wrapper: { ...shared.wrapper },
  language: { text: { ...shared.language.text } },
  region: { text: { ...shared.region.text } },
  ...condition,
};

const theme = {};

export { web, theme };
