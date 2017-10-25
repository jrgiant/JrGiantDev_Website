const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractLess = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});
module.exports = {
    entry: "./src/js/bundler.js",
    output: {
        path: __dirname,
        filename: "dist/scripts/jrgiantdev.js",
        chunkFilename: "[name]-[chunckhash].js"
    },
    module: {
        rules: [
            { test: /\.less$/,  use: extractLess.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
            }
        ]
    },
    plugins: [
        extractLess
    ]
};
