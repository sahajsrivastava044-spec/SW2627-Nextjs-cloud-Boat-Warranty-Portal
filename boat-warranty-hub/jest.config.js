const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: "./",
});

const customJestConfig = {
    testEnvironment: "node",
    setupFilesAfterEnv: ["<rootDir>/tests/setup.js"],
    testMatch: [
        "**/tests/**/*.test.js"
    ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
    },
    collectCoverageFrom: [
        "app/**/*.js",
        "services/**/*.js",
        "repositories/**/*.js",
        "lib/**/*.js"
    ],

    coverageDirectory: "coverage",

    clearMocks: true,

    verbose: true,
};

module.exports = createJestConfig(customJestConfig);