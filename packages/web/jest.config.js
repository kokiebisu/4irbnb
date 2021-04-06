// jest.config.js
module.exports = {
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.[tj]s$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '@bullet/(.*)': '<rootDir>/components/atoms/bullet/$1',
    '@bullet': '<rootDir>/components/atoms/bullet',
    '@api/(.*)': '<rootDir>/api/$1',
    '@api': '<rootDir>/api',
    '@input/(.*)': '<rootDir>/components/atoms/input/$1',
    '@input': '<rootDir>/components/atoms/input',
    '@button/(.*)': '<rootDir>/components/atoms/button/$1',
    '@button': '<rootDir>/components/atoms/button',
    '@bar/(.*)': '<rootDir>/components/organisms/bar/$1',
    '@bar': '<rootDir>/components/organisms/bar',
    '@modal/(.*)': '<rootDir>/components/organisms/modal/$1',
    '@modal': '<rootDir>/components/organisms/modal',
    '@header/(.*)': '<rootDir>/components/organisms/header/$1',
    '@header': '<rootDir>/components/organisms/header',
    '@animation/(.*)': '<rootDir>/components/animation/$1',
    '@animation': '<rootDir>/components/animation',
    '@video/(.*)': '<rootDir>/components/atoms/video/$1',
    '@video': '<rootDir>/components/atoms/video',
    '@card/(.*)': '<rootDir>/components/molecules/card/$1',
    '@card': '<rootDir>/components/molecules/card',
    '@footer/(.*)': '<rootDir>/components/organisms/footer/$1',
    '@footer': '<rootDir>/components/organisms/footer',
    '@prototype/(.*)': '<rootDir>/components/prototype/$1',
    '@prototype': '<rootDir>/components/prototype',
    '@layout/(.*)': '<rootDir>/components/layout/$1',
    '@layout': '<rootDir>/components/layout',
    '@panel/(.*)': '<rootDir>/components/molecules/panel/$1',
    '@panel': '<rootDir>/components/molecules/panel',
    '@styles/(.*)': '<rootDir>/styles/$1',
    '@helper/(.*)': '<rootDir>/helper/$1',
    '@particle/(.*)': '<rootDir>/components/particles/$1',
    '@hooks/(.*)': '<rootDir>/hooks/$1',
    '@context/(.*)': '<rootDir>/context/$1',
    '@config': '<rootDir>/config/index.ts',
    '@icons': '<rootDir>/components/icons',
  },
  moduleDirectories: ['node_modules', 'components'],
};
