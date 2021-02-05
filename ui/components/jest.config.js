// jest.config.js
module.exports = {
  collectCoverageFrom: ["**/*.{ts,tsx}", "!**/*.d.ts", "!**/node_modules/**"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],

  transform: {
    "^.+\\.(ts|tsx|js|jsx)?$": "ts-jest",
    "^.+\\.(js|jsx|ts|tsx)?$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/"],
  // moduleNameMapper: {
  //   "\\.(css|less|scss)$": "identity-obj-proxy",
  // },
  moduleDirectories: ["node_modules", "components"],
};
