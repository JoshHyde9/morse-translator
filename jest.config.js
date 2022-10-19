module.exports = {
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(mjs?)$",
  transform: {
    "^.+\\.mjs$": "babel-jest",
  },
  testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
  moduleFileExtensions: ["js", "mjs"],
};
