const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname,"../index.js"),
    devtool: 'source-map',
    output: {
        path:  path.resolve(__dirname,"../dist"),
        filename: 'draw-echart.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', 'json'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'eslint-loader',
                        options: {
                            fix: true,
                        },
                    },
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
                exclude: /node_modules/,
            },
        ],
    },
    devServer: {
        port: 3002,
        // open: true,
        overlay: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
        })
    ],
};
