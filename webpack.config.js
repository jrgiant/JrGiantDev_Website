const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "./dist/style/style.css",
    disable: process.env.NODE_ENV === "development"
});
module.exports = {
    entry: "./src/scripts/bundler.js",
    output: {
        path: __dirname,
        filename: "./dist/scripts/jrgiantdev.js",
        chunkFilename: "[name]-[chunckhash].js"
    },
    module: {
        rules: [
            { test: /\.scss$/,  use: extractSass.extract({
                use: [{
                    loader: "css-loader",
                    options:{url:false}
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react','env' ]
                }
            }
        ]
    },
    plugins: [
        extractSass,
        (function () {
            this.plugin('done', function (stats) {
                console.log(('\n[Compiled at ' + new Date().toTimeString() + ']') + ' .\n');
            });
        })
    ]
};
