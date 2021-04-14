var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/WordCutter.jsx",
  output: {
    path: path.resolve("lib"),
    filename: "WordCutter.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: "babel-loader",
      },
    ],
  },
};
