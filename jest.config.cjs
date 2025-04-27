module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  clearMocks: true,
  coverageProvider: 'v8',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true }],
  },
}
