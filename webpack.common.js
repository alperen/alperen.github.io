const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const env = process.env.NODE_ENV;
const ENV_TARGET_PATHS = {
  OUTPUT_PATH: env == "production" ? "public" : "dev-public",
  HTML_PATH: env == "production" ? "index.html" : "index.dev.html"
};

module.exports = {
  entry: './app/entry.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, ENV_TARGET_PATHS.OUTPUT_PATH),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: ENV_TARGET_PATHS.HTML_PATH
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
      chunkFilename: '[id].css',
    }),
  ]
};
