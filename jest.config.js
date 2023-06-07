const config = {
    verbose: true,
    testEnvironment: 'jsdom',
    bail: 1,
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.scss$': 'jest-css-modules-transform',
        '\\.(css|less|scss)$': 'jest-css-modules-transform',
    },
    moduleNameMapper: {
        '\\.(scss)$': 'identity-obj-proxy',
        "\\.(png|jpg|jpeg|gif|svg)$": "identity-obj-proxy"
    }
};

module.exports = config;
