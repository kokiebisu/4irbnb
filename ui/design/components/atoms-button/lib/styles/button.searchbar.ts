const shared = {
  wrapper: {
    width: '100%',
    bg: 'white',
    padding: '12px 18px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'rgba(0, 0, 0, 0.08) 0px 1px 12px',
  },
  mini: {
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '45px',
      padding: '15px 8px 15px 18px',
    },
  },
  start: {
    text: {
      fontSize: '14px',
      fontWeight: 500,
    },
    icon: {
      borderRadius: '50%',
      height: '30px',
      width: '30px',
      bg: 'red.500',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  search: {
    icon: {
      wrapper: {
        marginRight: '12px',
      },
    },
    label: {
      text: {
        fontWeight: 100,
        fontSize: '15px',
        color: 'grey.500',
      },
    },
  },
};

const web = {
  wrapper: { ...shared.wrapper },
  mini: {
    wrapper: { ...shared.mini.wrapper },
  },
  start: {
    text: { ...shared.start.text },
    icon: { ...shared.start.icon },
  },
  search: {
    icon: { ...shared.search.icon },
    label: {
      text: { ...shared.search.label.text },
    },
  },
};

const theme = {
  wrapper: {},
};

export { web, theme };
