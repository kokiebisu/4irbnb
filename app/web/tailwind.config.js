module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        "input-upload":
          "url('https://a0.muscache.com/airbnb/static/packages/upload-photos-ghosts.56fe723d.png')",
      }),
      spacing: {
        112: "28rem",
      },
      width: {
        "4/10": "40%",
        "45/100": "45%",
        "55/100": "55%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "half-screen": "50vw",
      },
      minWidth: {
        screen: "100vw",
        5: "1.25rem",
        24: "5rem",
        60: "15rem",
        72: "18rem",
      },
      maxWidth: {
        "2.5xl": "45rem",
        "55/100": "55%",
        "8xl": "88rem",
        "9xl": "96rem",
        "10xl": "104rem",
        "11xl": "112rem",
      },
      inset: {
        "2/10": "20%",
        "4/10": "40%",
        "8/10": "80%",
        "9/10": "90%",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      blur: "rgba(125, 125, 125, 0.5)",
    }),
  },
  variants: {},
  plugins: [],
};
