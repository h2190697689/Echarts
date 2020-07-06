const path = require("path");
module.exports = {
    mode: "production",
    entry: "./echarts/draw.js",
    devtool: 'cheap-module-source-map',
    output: {
        path: path.resolve(__dirname,"./dist"),
        filename: "draw-echart.js",
        library: "drawEchart",
        libraryTarget: "umd"
    },
    externals: ["react","react-dom"],
    resolve: {
        extensions: [".js",".jsx","json"]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    }
};