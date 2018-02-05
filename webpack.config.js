const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    entry: './src/js/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }],
      }, {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'eslint-loader',
          options: {
            fix: true,
            failOnError: false
          }
        }],
      }],
    },
    devServer: {
      contentBase: path.join(__dirname, "public"),
    }
  },
  {
    entry: './src/sass/style.scss',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'style.css'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('style.css')
    ]
  }
];
