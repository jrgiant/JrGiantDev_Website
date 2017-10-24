module.exports = {
    entry: "./src/js/bundler.js",
    output: {
        path: __dirname,
        filename: "dist/scripts/jrgiantdev.js"
    },
    module: {
        rules: [
            { test: /\.less$/, exclude:/^(https?:)?\/\//, use: "less-loader" }
        ]
    }
};
