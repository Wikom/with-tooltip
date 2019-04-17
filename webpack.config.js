/**
 * Created by rouven on 11.04.17.
 */

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'withTooltip',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules:  [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    devtool: 'source-map',
    externals: {
        "react": "react",
        "react-dom": "react-dom",
        "react-tooltip": "react-tooltip",
        "uuid": "uuid"
    }
};
