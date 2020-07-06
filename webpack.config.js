const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");   // 分离css文件


module.exports = {
    mode: "development",
    entry: "./index.js",
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname,"./dist"),
        filename: "draw-echart.js"
    },
    resolve: {
        extensions: [".js",".jsx","json"]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"],
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: 3001
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        /**
         * css分离插件
         */
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css"     // [name]为chunk名称
        })
    ]
};