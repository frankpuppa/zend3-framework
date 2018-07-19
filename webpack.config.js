const webpack = require("webpack");
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var  devServer= {
     contentBase: path.join(__dirname, './public/js'),
     port:3000,
     lazy: true,
     inline:true,
     filename: 'main.js',
   }

module.exports = {
  // mode: "development",
  mode: "production",
   entry: [
   './public/js/myreact.js',
   './public/css/mycss.css',
   ],
   watch: true,
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
            },
            {
              test: /\.css$/,
              use: ExtractTextPlugin.extract({
                  // fallback: 'style-loader',
                  use: [
                  { 
                    loader: 'css-loader',
                    options: { minimize: true }} 
                ]
              })
            }
        ]
    },
    plugins: [ 
    new ExtractTextPlugin({filename: '../../public/css/main.css'})
  ]
};