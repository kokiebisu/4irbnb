const shared = {
  wrapper: {
    transition: " all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1)",
    bg: "rgba(255, 255, 255, 0.8)",
    "&:hover": {
      bg: "white",
    },
    padding: "12px",
    color: "white__2",
    borderRadius: "9999px",
  },
};

const web = {
  wrapper: { ...shared.wrapper },
};

const theme = {};

export const paginate = { web, theme };
