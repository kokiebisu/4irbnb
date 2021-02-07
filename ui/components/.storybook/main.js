module.exports = {
  stories: [
    "../atoms/**/**/*.stories.@(js|jsx|ts|tsx)",
    "../molecules/**/**/*.stories.@(js|jsx|ts|tsx)",
    "../organisms/**/**/*.stories.@(js|jsx|ts|tsx)",
    "../layout/**/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  babel: async (options) => ({
    ...options,
    plugins: [...options.plugins, "@babel/plugin-transform-react-jsx"],
  }),
};
