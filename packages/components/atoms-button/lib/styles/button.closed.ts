const shared = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 9999,
  },
};

const web = {
  wrapper: { ...shared.wrapper },
};

const theme = {
  selected: {
    bg: "black",
    border: "1px solid black",
  },
  unselected: {
    bg: "white",
    border: "1px solid lightgray",
  },
};

export { web, theme };
