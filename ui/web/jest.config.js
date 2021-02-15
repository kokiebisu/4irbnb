// jest.config.js
module.exports = {
  collectCoverageFrom: ["**/*.{ts,tsx}", "!**/*.d.ts", "!**/node_modules/**"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.[tj]s$": "ts-jest",
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
  moduleDirectories: ["node_modules", "components"],
};
