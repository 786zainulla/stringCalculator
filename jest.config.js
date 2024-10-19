// jest.config.js
module.exports = {
    testEnvironment: 'node', // Set the test environment to Node.js
    verbose: true, // Display individual test results with the test suite hierarchy
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'], // Specify the test file patterns
    collectCoverage: true, // Enable coverage collection
    coverageDirectory: 'coverage', // Directory where coverage reports will be saved
    coverageReporters: ['text', 'lcov'], // Specify the coverage report formats
};