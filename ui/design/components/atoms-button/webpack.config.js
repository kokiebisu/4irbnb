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
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              publicPath: "/public/fonts",
              outputPath: "/public/fonts",
            },
          },
        ],
      },
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
        loader: "css-loader",
        options: {
          modules: {
            exportOnlyLocals: true,
          },
        },
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
