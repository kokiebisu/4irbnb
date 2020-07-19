module.exports = {
  stories: ['../src/molecules/**/**/*.stories.tsx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport/register',
    '@storybook/addon-storysource',
    {
      name: '@storybook/addon-docs',
      options: {
        configureTSX: true,
      },
    },
  ],
};
