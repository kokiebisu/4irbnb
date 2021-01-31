const shared = {
  wrapper: {
    width: "100%",
    borderRadius: "25px",
    bg: "white",
    border: "1px solid",
    borderColor: "white__2",
    padding: "12px 18px",
    paddingRight: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 12px",
    "&:hover": {
      boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px",
      transition: "0.3s all",
    },
  },
  mini: {
    wrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid",
      borderColor: "white__3",
      borderRadius: "30px",
      width: "100%",
      height: "45px",
      padding: "15px 8px 15px 18px",
    },
  },
  start: {
    text: {
      fontSize: "14px",
      fontWeight: 500,
    },
    icon: {
      borderRadius: "50%",
      height: "30px",
      width: "30px",
      bg: "primary",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  search: {
    icon: {
      wrapper: {
        marginRight: "12px",
      },
    },
    label: {
      text: {
        fontWeight: 100,
        fontSize: "15px",
        color: "gray__0",
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

const theme = {};

export const searchbar = {
  web,
  theme,
};
