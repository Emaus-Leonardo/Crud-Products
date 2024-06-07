module.exports = {
    TestEnvironment: 'jest-environment-jsdom',
    setupFilerAfterEnv: ['<rootDir>/.jest/setup-test.js'],
    moduleNameMapper: {
        '\\.(gif|ttf|eot||svg|png)$': '<rootDir>/.jest/mocks__/fileMock.js',
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    }
}