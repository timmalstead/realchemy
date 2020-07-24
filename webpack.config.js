const CompressionPlugin = require("compression-webpack-plugin")
const zopfli = require("@gfx/zopfli")

const config = {
  entry: {
    index: "./src/index.tsx",
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    path: __dirname + "/build",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  devServer: {
    contentBase: "./public",
    hot: true,
    open: true,
    port: 3000,
  },
  plugins: [
    new CompressionPlugin({
      compressionOptions: {
        numiterations: 15,
      },
      algorithm(input, compressionOptions, callback) {
        return zopfli.gzip(input, compressionOptions, callback)
      },
    }),
  ],
}

module.exports = config
