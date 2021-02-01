const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: [
    "../atoms/**/**/*.stories.@(js|jsx|ts|tsx)",
    "../molecules/**/**/*.stories.@(js|jsx|ts|tsx)",
    "../organisms/**/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  logLevel: "debug",
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
  ],
  babel: async (options) => ({
    ...options,
    plugins: [...options.plugins, "@babel/plugin-transform-react-jsx"],
  }),
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      use: [
        {
          loader: "file-loader",
          query: {
            name: "[name].[ext]",
          },
        },
      ],
    });

    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json"),
      }),
    ];

    return config;
  },
};
