const path = require("path");
const config={
    entryPath:path.join(__dirname,"..","./src/index.js"),
    development:{
        port:3000,
        mode:"development",
        host:"localhost"
    },
    production:{
        mode:"production",
        outputPath:{
            path:path.join(__dirname,"..","build"),
        },
    }
}

module.exports = config;