const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
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
            { test: /\.Sass$/,  use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
            }
        ]
    },
    plugins: [
        extractSass
    ]
};
