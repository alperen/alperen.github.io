const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  watch: false,
  mode: "production",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "public"),
  },
})
