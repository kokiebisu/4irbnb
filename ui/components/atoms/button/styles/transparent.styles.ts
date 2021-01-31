const shared = {
  wrapper: {
    borderRadius: "30px",
    display: "flex",
    alignItems: "center",
    bg: "transparent",
    py: "10px",
    px: "12px",
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
        bg: "white__1",
      },
    },
  },
};

export const transparent = {
  web,
  theme,
};
