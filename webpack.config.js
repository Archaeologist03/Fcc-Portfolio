const path = require("path");

module.exports = {
    entry: {
        app: "./src/scripts/app.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.bundle.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["babel-preset-env"]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};