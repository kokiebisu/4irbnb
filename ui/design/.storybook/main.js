module.exports = {
  stories: [
    '../components/atoms-input/**/*.stories.tsx',
    '../components/atoms-button/**/*.stories.tsx',
    '../components/atoms-bullet/**/*.stories.tsx',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    return config;
  },
};
