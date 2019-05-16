const path = require("path");
const extractTextWebpackPlugin = require("extract-text-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
module.exports={
    mode:"development",
    entry:path.join(__dirname,"./src/index.js"),
    output:{
        path:path.join(__dirname,"build"),
        filename:"index.js"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:extractTextWebpackPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader"
                }),
                
            },
            {
                test:/\.(jsx|js)$/,
                loader:"babel-loader",
                options:{
                    presets:["@babel/preset-env"]
                }
            },
            {
                test:/\.(jpg|png|gif)/,
                loader:"url-loader",
                options:{
                    limit:4000
                }
            },
            {
                test:/\.(ttf|svg|woff)$/,
                loader:"file-loader",
            },
            {
                test:/\.(scss|sass)$/,
                loader:"sass-loader"
            }
        ],
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
    devServer:{
        port:8000,
        open:true,
        hot:true,
        before(app){    
            app.get("/api/data",(req,res,next)=>{
                res.send({
                    code:1,msg:"success"
                });
            })
        }
    }


}