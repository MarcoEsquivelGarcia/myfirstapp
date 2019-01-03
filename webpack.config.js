var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
    entry: SRC_DIR + "/index.js",
    output: {
        path: DIST_DIR ,
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    module: {
       rules: [
           {
               test: /\.js$/,
               exclude: /node_modules/,
               use: {
                   loader: "babel-loader"
               }
           },
           {
               test: /\.(css|less)$/,
               use: ["style-loader", "css-loader"]
           }
       ]
   }
 };
