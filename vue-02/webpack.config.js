const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
    mode:"development",
    entry:path.join(__dirname,"./src/index.js"),
    output:{
        path:path.join(__dirname,"build"),
        filename:"index.js"
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                loader:"babel-loader",
                options:{
                    presets:["@babel/preset-env"]
                }
            },
            {
                test:/\.(css|scss|sass)$/,
                use:["style-loader","css-loader","sass-loader"]
            }
        ]
    },
    plugins:[
        new cleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template:"index.html",
            filename:"app.html"
        })
    ]
}