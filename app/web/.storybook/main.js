const path = require('path');

module.exports = {
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
  ],
  babel: async (options) => ({
    ...options,
    plugins: [...options.plugins, '@babel/plugin-transform-react-jsx'],
  }),
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      use: [
        {
          loader: 'file-loader',
          query: {
            name: '[name].[ext]',
          },
        },
      ],
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      '@panel': path.join(__dirname, '../components/molecules/panel'),
      '@atoms': path.join(__dirname, '../components/atoms'),
      '@card': path.join(__dirname, '../components/molecules/card'),
      '@prototype': path.join(__dirname, '../components/prototype'),
      '@prototype/': path.join(__dirname, '../components/prototype/'),
      '@animation': path.join(__dirname, '../components/animation'),
      '@banner/': path.join(__dirname, '../components/organisms/banner/'),
      '@create': path.join(
        __dirname,
        '../components/segments/become-a-host/create'
      ),
      '@create/': path.join(
        __dirname,
        '../components/segments/become-a-host/create/'
      ),
      '@bar': path.join(__dirname, '../components/organisms/bar'),
      '@footer': path.join(__dirname, '../components/organisms/footer'),
      '@header': path.join(__dirname, '../components/organisms/header'),
      '@modal': path.join(__dirname, '../components/organisms/modal'),
      '@section/': path.join(__dirname, '../components/organisms/section/'),
      '@layout': path.join(__dirname, '../components/layout'),
      '@template': path.join(__dirname, '../components/segments'),
      '@styles': path.join(__dirname, '../styles/'),
      '@helper': path.join(__dirname, '../helper/'),
      '@hooks': path.join(__dirname, '../hooks/'),
      '@context': path.join(__dirname, '../context/'),
      '@api': path.join(__dirname, '../api'),
      '@utils': path.join(__dirname, '../utils/'),
    };

    config.resolve.extensions.push('.ts', '.tsx');

    console.log(config.resolve.alias);

    return config;
  },
};
