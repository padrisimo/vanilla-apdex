const HrmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        type: "javascript/auto",
        test: /\.json$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js"]
  },
  output: {
    path: __dirname + "/build",
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new HrmlWebpackPlugin({
      template: "./src/public/index.html"
    })
  ]
};
