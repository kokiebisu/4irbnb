export const shared = {};

const web = {
  wrapper: {
    whiteSpace: "nowrap",
    padding: "13px 18px",
    fontWeight: 500,
    borderRadius: "8px",
    width: "100%",
    minWidth: "150px",
    fontSize: "15px",
    display: "flex",
    justifyContent: "center",
  },
};

const theme = {
  wrapper: {
    inverse: {
      bg: "gray__4",
      border: "1px solid transparent",
    },
    plain: {
      bg: "transparent",
      border: "1px solid black",
    },
  },
  label: {
    inverse: {
      color: "white",
    },
    plain: {
      color: "black",
    },
  },
};

export const privacy = {
  web,
  theme,
};
