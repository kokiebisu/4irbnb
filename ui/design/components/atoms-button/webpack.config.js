const path = require("path");

module.exports = {
  mode: "production",
  entry: "./lib/index.tsx",
  target: "node",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
    library: "@nextbnb/atoms-button",
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
        test: /\.css$/i,
        use: [
          // "style-loader",
          "isomorphic-style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "static/media/[name].[ext]",
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    aliasFields: ["module"],
  },
  externals: {
    react: "react",
  },
};
