const shared = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: "4px 6px 4px 10px",
    borderRadius: "30px",
  },
  icon: {
    wrapper: {
      marginRight: "10px",
    },
  },
  avatar: {
    borderRadius: "9999px",
    width: "30px",
    verticalAlign: "bottom",
  },
};

const web = {
  wrapper: { ...shared.wrapper },
  icon: {
    wrapper: {
      ...shared.icon.wrapper,
    },
  },
  avatar: {
    ...shared.avatar,
  },
};

const theme = {
  wrapper: {
    inverse: {
      border: "2px solid grey.300",
      "&:hover": {
        boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px",
        transition: "0.3s all",
      },
    },
    plain: {
      border: "2px solid",
      borderColor: "grey.300",
    },
  },
};

export const menu = {
  web,
  theme,
};
