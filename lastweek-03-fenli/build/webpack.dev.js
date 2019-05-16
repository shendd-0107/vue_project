const config = require("../config/index.js");
const BaseConfig = require("./webpack.base.js");
const merge = require("webpack-merge");
const devConfig = {
    mode:config.development.mode,
    devServer:{
        port:config.development.port,
        host:config.development.host,
        open:true,
        inline:true,
         
    },

}

module.exports = merge(BaseConfig,devConfig);
