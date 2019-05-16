const config = require("../config/index.js");
const BaseConfig = require("./webpack.base.js");
const merge = require("webpack-merge");
const ProConfig = {
    mode:config.production.mode,
    output:{
        path:config.production.outputPath,
        filename:"index.js"
    }

}
module.exports = merge(BaseConfig,ProConfig);