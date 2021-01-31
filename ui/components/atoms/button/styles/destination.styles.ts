const shared = {
  wrapper: {
    padding: "16px",
  },
  city: {
    text: {
      fontSize: 15,
    },
  },
  location: {
    text: {
      fontSize: 14,
      color: "gray__0",
    },
  },
};

const web = {
  wrapper: { ...shared.wrapper },
  city: {
    text: {
      ...shared.city.text,
    },
  },
  location: {
    text: {
      ...shared.location.text,
    },
  },
};

const theme = {};

export const destination = {
  web,
  theme,
};
