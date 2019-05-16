const config = require("../config/index.js");
const extractTextWebpackPlugin = require("extract-text-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const BaseConfig = {
    entry:config.entryPath,
    module:{
        rules:[
            {
                test:/\.(jsx|js)$/,
                loader:"babel-loader",
                options:{
                    presets:["@babel/preset-env"]
                }
            },
            {
                test:/\.(sass|css|scss)$/,
                use:extractTextWebpackPlugin.extract({
                    fallback:"style-loader",
                    use:["css-loader","sass-loader"]
                })
            },
            {
                test:/\.(jpg|png|gif)$/,
                loader:"url-loader",
                options:{
                    limit:"4000",
                    name:"./img/[name]-[hash].[ext]"
                }
            },
            {
                test:/\.(eot|svg|woff|ttf)$/,
                loader:"file-loader",
                options:{
                    name:"./font/[name].[ext]"
                }
            },
            {
                test:/\.(html)$/,
                loader:"html-loader"
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
        new webpack.HotModuleReplacementPlugin()
    ],
}

module.exports = BaseConfig;