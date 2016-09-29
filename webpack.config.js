var { join } = require('path')
var webpack = require('webpack')

let config = {
  entry: join(__dirname, 'src/client/js/main.js'),

  output: {
    path: join(__dirname, 'built-assets/js'),
    filename: ifProd('main.min.js', 'main.js')
  },

  module: {
    loaders: [
      {
        test: /.js/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(ifProd('production', 'development'))
      }
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  let uglify = new webpack.optimize.UglifyJsPlugin({minimize: true})
  config.plugins.push(uglify)
}

function ifProd (a, b) {
  return process.env.NODE_ENV === 'production' ? a : b
}

module.exports = config
