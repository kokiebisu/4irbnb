// jest.config.js
module.exports = {
  collectCoverageFrom: ["**/*.{ts,tsx}", "!**/*.d.ts", "!**/node_modules/**"],
  // we need to create this file
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
    "@bullet": "<rootDir>/components/atoms/bullet",
    "@bullet/(.*)": "<rootDir>/components/atoms/bullet/$1",
    "@button/(.*)": "<rootDir>/components/atoms/button/$1",
    "@card/(.*)": "<rootDir>/components/molecules/card/$1",
    "@styles/(.*)": "<rootDir>/styles/$1",
    "@svg/(.*)": "<rootDir>/public/svg/$1",
    "@animation/(.*)": "<rootDir>/components/animation/$1",
    "@helper/(.*)": "<rootDir>/helper/$1",
    "@particle/(.*)": "<rootDir>/components/particles/$1",
    "@content": "<rootDir>/content",
    "@template": "<rootDir>/components/templates",
    "@template/(.*)": "<rootDir>/components/templates/$1",
    "@prototype": "<rootDir>/components/prototype",
  },
  moduleDirectories: ["node_modules", "components"],
};
