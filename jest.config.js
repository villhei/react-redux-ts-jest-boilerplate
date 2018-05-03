module.exports = {
  globals: {
    'ts-jest': {
      skipBabel: true
    }
  },
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest/preprocessor.js'
  },
  setupFiles: [
    "<rootDir>/test-setup.js"
  ],
  testRegex: '(/test/.*|(\\.|/)(test|))\\.(jsx?|tsx?)$',
  testEnvironment: 'node',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json'
  ],
  rootDir: '.',
  moduleNameMapper: {
    '^app(.*)$': '<rootDir>/src/$1'
  },
  collectCoverage: false
}
