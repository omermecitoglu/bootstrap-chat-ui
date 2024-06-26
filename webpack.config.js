const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const autoprefixer = require("autoprefixer")
const path = require("path");

module.exports = (env, argv) => ({
  entry: "./src/components/Chat/index.tsx",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      type: "commonjs2"
    },
  },
  target: "web",
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({ extractComments: false }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          argv.mode === "production" ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer
                ]
              }
            }
          },
          "sass-loader",
        ],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "~": path.resolve(__dirname, "src/"),
    },
  },
  externals: [
    "react",
    "react-bootstrap",
    /^react-bootstrap\/\w+$/,
    "classnames",
    /^@fortawesome\/react-fontawesome$/,
    /^@fortawesome\/free-solid-svg-icons\/\w+$/,
    "textarea-caret",
    "unicode-emoji-json",
  ],
  externalsType: "commonjs",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
  },
  performance: {
    maxAssetSize: 35 * 1024,      // 35 KB in bytes
    maxEntrypointSize: 40 * 1024, // 40 KB in bytes
  },
});
