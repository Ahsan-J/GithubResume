// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {

    // Automatically clear mock calls and instances between every test
    clearMocks: true,
  
    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,
  
    // The directory where Jest should output its coverage files
    coverageDirectory: "coverage",
  
    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: [
      "node_modules"
    ],
  
    // A list of reporter names that Jest uses when writing coverage reports
    coverageReporters: ["html"],
  
    // An object that configures minimum threshold enforcement for coverage results
    // coverageThreshold: {
    //   global: {
    //     statements: 100
    //   }
    // },
  
    // Make calling deprecated APIs throw helpful error messages
    errorOnDeprecated: true,
  
    // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
    maxWorkers: "100%",
  
    // An array of directory names to be searched recursively up from the requiring module's location
    moduleDirectories: [
      'node_modules', '<rootDir>', '<rootDir>setupTest.ts',
    ],
  
    // A map from regular expressions to module names that allow to stub out resources with a single module
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>src/$1',
    },
  
    // Activates notifications for test results
    notify: true,
  
    // An enum that specifies notification mode. Requires { notify: true }
    notifyMode: "failure-change",
  
    // A preset that is used as a base for Jest's configuration
    preset: "ts-jest",
  
    // The root directory that Jest should scan for tests and modules within
    rootDir: "./",
  
    // The paths to modules that run some code to configure or set up the testing environment before each test
    setupFiles: ['<rootDir>aphroditeSetup.ts'],
  
    // A list of paths to modules that run some code to configure or set up the testing framework before each test
    setupFilesAfterEnv: ["<rootDir>setupTest.ts"],
  
    // The test environment that will be used for testing
    testEnvironment: "jsdom",
  
    // The glob patterns Jest uses to detect test files
    testMatch: [
      "<rootDir>**/*.spec.[jt]s?(x)"
    ],
  
    // A map from regular expressions to paths to transformers
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    },
  
    // Indicates whether each individual test should be reported during the run
    verbose: true,
  };
  