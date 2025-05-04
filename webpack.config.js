const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    
    target: "node",
    externalsPresets: { node: true },
    // make sure the source maps work
    // webpack will transpile TS and JS files
    resolve: {
        modules: [ path.resolve(__dirname, 'cypress'), path.resolve(__dirname, 'cypress/tests'), "node_modules", 
        path.resolve(__dirname, 'core')],
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
        alias: {
            tests: path.resolve(__dirname, 'cypress/tests'),
        },
    },

    module: {
        rules: [
            {
                    test: /\.(js|jsx|tsx|ts)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/typescript'
                        ]
                    }
            },
           
                        
            {
                test: /\.xlsx$/i,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'webpack-xlsx-loader',
                        options: {
                            esModule: false,
                            publicPath: '/'
                        }
                    },
                ],
            }
        ],
    },

}