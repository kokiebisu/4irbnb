module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
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
    },
  },
  variants: {},
  plugins: [],
};
