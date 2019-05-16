const path = require("path");
const extractTextWebpackPlugin = require("extract-text-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
    entry:path.join(__dirname,"./src/index.js"),
    output:{
        path:path.join(__dirname,"build"),
        filename:"index.js"
    },
    module:{
        rules:[
            {
                //js
                test:/\.(js|jsx)$/,
                loader:"babel-loader",
                options:{
                    presets:["@babel/preset-env"]
                }
            },
            {
                //css
                test:/\.css$/,
                use:extractTextWebpackPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader"
                })
                // use:["style-loader","css-loader"]
            },
            {
                //sass
                test:/\.(sass|scss)$/,
                use:extractTextWebpackPlugin.extract({
                    fallback:"style-loader",
                    use:["css-loader","sass-loader"]
                })
                // use:["style-loader","css-loader","sass-loader"]
            },
            {
                //url
                test:/\.(jpg|png|gif|jpeg)/,
                loader:"url-loader",
                options:{
                    limit:4000
                }
            },
            {
                //icon---file-loader
                test:/\.(svg|ttf|woff)$/,
                loader:"file-loader",
            }
        ]
    },
    plugins:[
        new cleanWebpackPlugin(),
        new extractTextWebpackPlugin("style.css"),
        new htmlWebpackPlugin({
            template:"index.html",
            filename:"app.html"
        }),

    ]
}