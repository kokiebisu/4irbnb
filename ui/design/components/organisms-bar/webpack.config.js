const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: "./lib/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
    library: "@nextbnb/organisms-bar",
    libraryTarget: "umd",
    globalObject: "this",
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
              plugins: ["@babel/plugin-transform-runtime"],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "static/media/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    aliasFields: ["module"],
  },
  externals: {
    react: "react",
  },
};
