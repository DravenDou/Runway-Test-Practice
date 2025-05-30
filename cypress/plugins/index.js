require("tsconfig-paths").register()

const webpackPreprocessor = require('@cypress/webpack-preprocessor')

module.exports = (on) => {
    const options = {
        webpackOptions: require('../../webpack.config'),
        watchOptions: {},
    }

    on('file:preprocessor', webpackPreprocessor(options))
}