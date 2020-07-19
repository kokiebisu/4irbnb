module.exports = {
  stories: ['../src/blocks/**/**/*.stories.(tsx|mdx)'],
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
