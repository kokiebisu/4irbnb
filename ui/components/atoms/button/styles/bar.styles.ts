const shared = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    ":hover": {
      svg: {
        stroke: "#f64f6f",
      },
      p: {
        color: "#f64f6f",
      },
    },
  },
  selected: {
    svg: {
      stroke: "#f64f6f",
    },
    p: {
      color: "#f64f6f",
    },
  },
  logo: {
    wrapper: {
      svg: {
        stroke: "#717171",
        fillOpacity: 0,
        strokeWidth: "1.5px",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
    },
  },
  label: {
    wrapper: {},
    text: {
      fontSize: "10px",
    },
  },
} as const;

const web = {
  wrapper: { ...shared.wrapper },
  selected: { ...shared.selected },
  logo: { ...shared.logo },
  label: { ...shared.label },
};

const theme = {
  wrapper: {},
  selected: {},
  logo: {},
  label: {},
};

export const bar = {
  web,
  theme,
};
