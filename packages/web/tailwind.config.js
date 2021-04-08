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
        'half-screen': '50vw',
      },
    },
  },
  variants: {},
  plugins: [],
};
