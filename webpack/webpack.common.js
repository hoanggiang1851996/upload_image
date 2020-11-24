const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlMinifyOpts = require('./htmlMinifier');

module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/index.html'),
      minify: htmlMinifyOpts,
      // favicon: 'src/assets/favicon.ico',
    }),
  ],
  resolve: {
    alias: {
      src: Path.resolve(__dirname, '../src'),
      apis: Path.resolve(__dirname, '../src/apis'),
      assets: Path.resolve(__dirname, '../src/assets'),
      components: Path.resolve(__dirname, '../src/components'),
      constants: Path.resolve(__dirname, '../src/constants'),
      layouts: Path.resolve(__dirname, '../src/layouts'),
      pages: Path.resolve(__dirname, '../src/pages'),
      styles: Path.resolve(__dirname, '../src/styles'),
      utils: Path.resolve(__dirname, '../src/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },
    ],
  },
};
