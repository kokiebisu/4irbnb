const shared = {
  wrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bg: 'transparent',
  },
  icon: {
    wrapper: {
      position: 'absolute',
      left: 0,
    },
  },
  label: {
    wrapper: {},
    text: {
      fontSize: 14,
      color: 'grey.600',
    },
  },
} as const;

const theme = {
  wrapper: {},
  icon: {
    wrapper: {},
  },
  label: {
    wrapper: {},
    text: {},
  },
} as const;

const web = {
  wrapper: { ...shared.wrapper },
  icon: { wrapper: { ...shared.icon.wrapper } },
  label: {
    wrapper: { ...shared.label.wrapper },
    text: { ...shared.label.text },
  },
};

export const mobile = {
  wrapper: { ...shared.wrapper },
  icon: { wrapper: { ...shared.icon.wrapper } },
  label: {
    wrapper: { ...shared.label.wrapper },
    text: { ...shared.label.text },
  },
};

export { theme, web };
