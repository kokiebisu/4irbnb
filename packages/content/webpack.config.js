const path = require('path');

module.exports = {
  mode: 'production',
  entry: './lib/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    library: '@nextbnb/content',
    libraryTarget: 'umd',
    globalObject: 'this',
    publicPath: '',
  },
  performance: {
    hints: false,
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { modules: false }],
                ['@babel/preset-typescript'],
              ],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    aliasFields: ['module'],
  },
};
