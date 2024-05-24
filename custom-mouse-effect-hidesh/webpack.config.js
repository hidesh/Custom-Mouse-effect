const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
    FollowingCircle: "./src/FollowingCircle.js",
    CustomCursorParticles: "./src/CustomCursorParticles.js"
  },
  output: {
    path: path.resolve("build"),
    filename: "[name].js",
    library: "[name]",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  externals: {
    react: "react",
  },
};
