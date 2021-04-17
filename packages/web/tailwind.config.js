module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        'input-upload':
          "url('https://a0.muscache.com/airbnb/static/packages/upload-photos-ghosts.56fe723d.png')",
      }),
      spacing: {
        112: '28rem',
      },
      width: {
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        'half-screen': '50vw',
      },
      minWidth: {
        screen: '100vw',
      },
      maxWidth: {
        '2.5xl': '45rem',
      },
      inset: {
        '2/10': '20%',
        '4/10': '40%',
        '8/10': '80%',
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      blur: 'rgba(125, 125, 125, 0.5)',
    }),
  },
  variants: {},
  plugins: [],
};
