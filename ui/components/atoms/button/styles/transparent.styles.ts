const shared = {
  wrapper: {
    borderRadius: "30px",
    display: "flex",
    alignItems: "center",
    bg: "transparent",
    py: "10px",
    px: "12px",
    fontSize: 16,
  },
};

const web = {
  wrapper: { ...shared.wrapper },
};

const theme = {
  wrapper: {
    inverse: {
      "&:hover": {
        bg: "white__transparent",
      },
    },
    plain: {
      "&:hover": {
        bg: "grey.100",
      },
    },
  },
};

export const transparent = {
  web,
  theme,
};
