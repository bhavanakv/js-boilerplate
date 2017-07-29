import path from "path";
import webpack from "webpack";

export default {
    devtool: "source-map",
    entry: [
        path.resolve(__dirname, "src/index")
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: "bundle.js"
    },
    plugins: [
        // Minify JS
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"]},
            {test: /\.css$/, loaders: ["style-loader","css-loader"]},
            {test: /\.sass$/, loaders: ["sass-loader"]}
        ]
    }
};
