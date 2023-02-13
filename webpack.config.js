const path = require("path");

module.exports = {
  entry: "./src/redux-toolkit/index-redux-toolkit.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
  },
  devtool: "source-map",
  mode: "development",
};
