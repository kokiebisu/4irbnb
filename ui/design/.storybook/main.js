module.exports = {
  stories: ["../components/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    console.dir(config, { depth: null });
    return config;
  },
};
