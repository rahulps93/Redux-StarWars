const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Constant with our paths
const isProduction = process.env.NODE_ENV === 'development';
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'), // source folder path -> ADDED IN THIS STEP
  JS: path.resolve(__dirname, 'src/js'),
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.JS, 'index.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js',
  },
  // Dev server configuration -> ADDED IN THIS STEP
  // Now it uses our "src" folder as a starting point
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
    new ExtractTextPlugin('style.bundle.css')
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};