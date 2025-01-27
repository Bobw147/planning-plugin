module.exports = {
    preset: 'ts-jest',
    transform: {'^.+\\.ts?$': 'ts-jest'},
    testEnvironment: 'jsdom',
    testRegex: '/tests/.*|(\\.|/)(test|spec)\\.(js|jsx|ts|tsx)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
  };