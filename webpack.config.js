const webpack = require("webpack");
const path = require('path');

var  devServer= {
     contentBase: path.join(__dirname, './public/js'),
     port:3000,
     lazy: true,
     inline:true,
     filename: 'main.js',
   }

module.exports = {
  mode: "development",
   entry: './public/js/myreact.js',
   watch: true,
  // mode: "production",
  // devServer,
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './public/js')
  },
   module: {
    rules: [
      {
    test: /\.js?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['react']
        }
      }
    ],
  }
    ]
  },
};