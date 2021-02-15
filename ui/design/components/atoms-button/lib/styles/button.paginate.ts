const shared = {
  wrapper: {
    transition: " all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1)",
    padding: "12px",
    borderRadius: "9999px",
  },
};

const web = {
  wrapper: {
    ...shared.wrapper,
  },
};

const theme = {
  wrapper: {
    bg: "rgba(255, 255, 255, 0.8)",
    color: "grey.300",
    ":hover": {
      bg: "white",
    },
  },
};

export const paginate = { web, theme };
