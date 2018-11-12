
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path              = require('path');

module.exports = {
  entry: ['babel-polyfill', './client/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test    : /\.js|\.jsx$/,
        exclude : [/node_modules/, /app/],
        loader  : 'babel-loader',
        options: {
          cacheDirectory : true,
          plugins        : ['transform-class-properties']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', 'client']
  },
  devServer: {
    compress           : true,
    historyApiFallback : true,
    port               : 3000,

    before(app) {
      app.get('/api/user', (req, res) => res.json({ user: 'dev' }));
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      favicon: 'client/static/icon/favicon.ico',
    })
  ]
}
