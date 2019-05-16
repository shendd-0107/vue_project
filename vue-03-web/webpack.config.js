const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const template = require("vue-loader/lib/plugin");
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
                test:/\.(jsx|js)$/,
                loader:"babel-loader",
                options:{
                    presets:["@babel/preset-env"]
                }
            },
            {
                test:/\.(vue)$/,
                loader:"vue-loader"
            }
        ]
    },
    plugins:[
        
        new webpack.HotModuleReplacementPlugin(),
        new template(),
        new htmlWebpackPlugin({
            template:"index.html",
        })
    ],
    devServer:{
        port:3000,
        open:true,
        hot:true
    },
    resolve:{
        alias:{
            "vue$":"vue/dist/vue.esm.js"
        },
        extensions:[".js",".json",".vue"]
    }
}