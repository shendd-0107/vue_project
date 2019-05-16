const path = require("path");
//单个入口
    // module.exports = {
    //     entry:path.join(__dirname,"./src/index"),
    //     output:{
    //         path:path.join(__dirname,"build"),
    //         filename:"index.js"
    //     },
    //     mode:"development"
    // }
//多个入口
    // module.exports = {
    //     entry:{
    //             index:path.join(__dirname,"./src/index"),
    //             app:path.join(__dirname,"./src/app")
    //             },
    //     output:{
    //         path:path.join(__dirname,"build"),
    //         filename:"[name].js"
    //     },
    //     mode:"development"
    // }
//数组入口
    module.exports = {
        entry:path.join(__dirname,"./src/index.js"),
        output:{
            path:path.join(__dirname,"build"),
            filename:"index.js"
        },
        mode:"development",
        module:{
            rules:[
                // {
                //     test:/\.(js|jsx)$/,
                //     loader:"babel-loader",
                //     options:{
                //         presets:["@babel/preset-env"]
                //     }
                // }
                {
                    test:/\.css/,
                    use:["style-loader","css-loader"]
                },
                {
                    test:/\.(jpg|png)/,
                    loader:"url-loader",
                    options:{
                        limit:3000
                    }
                },
                {
                    test:/\.(svg|woff|ttf)$/,
                    loader:"file-loader",
                    options:{
                        name:"./fonts/[name].[ext]"
                    }
                }
            ]
        }
    }
