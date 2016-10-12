var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports =  {
  entry: [
    './src/main.js'
  ],
  output: {
    path: "/public/dist/js",
    publicPath: "/public/",
    filename: "app.js"
  },
  watch: false,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style', // backup loader when not building .css file
          'css!sass' // loaders to preprocess CSS
        )
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  resolve: {
    modulesDirectories: ['node_modules']
  },
  plugins: [
    new ExtractTextPlugin('/public/dist/css/app.css'),
  ]
}
