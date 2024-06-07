module.exports = {
    TestEnvironment: 'jest-evironment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': '<rootDir>/.jest/mocks/fileMocks.js',
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
}