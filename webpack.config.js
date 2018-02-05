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
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }],
      }, {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'eslint-loader'
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
      loaders: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract(
            'css-loader!sass-loader'
          )
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('style.css')
    ]
  }
];
