const path = require("path");
module.exports = {
    mode: "production",
    entry: "../src/echarts/draw.js",
    devtool: 'cheap-module-source-map',
    output: {
        path: path.resolve(__dirname,"../build"),
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
            }
        ]
    }
};
