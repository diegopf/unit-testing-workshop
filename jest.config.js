/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testMatch: ["<rootDir>/**/*.spec.ts"],
  testEnvironment: "jsdom",
  transform: {
    // process `*.vue` files with `vue-jest`
    ".*\\.(vue)$": "vue-jest",
  },
};
