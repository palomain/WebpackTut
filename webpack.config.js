/**
 * Created by carhe on 5/20/2017.
 */

const path = require('path');
const ExtracttTextPlugin = require('extract-text-webpack-plugin');

const config = {
   entry : './src/index.js',
   output : {
      path : path.resolve(__dirname, 'build'),
      filename : 'bundle.js',
      publicPath : 'build/'
   },
   module : {
      rules : [
         {
            use : 'babel-loader',
            test : /\.js$/,

         },
         {
            loader : ExtracttTextPlugin.extract({
                   loader: 'css-loader'
                } )  ,
            test : /\.css$/
         }, {
            test : /\.(jpe?g|png|gif|svg)$/,
            use : [
               {
                  loader : 'url-loader',
                  options : {limit : 40000 }
               },
                  'image-webpack-loader'

            ],

         }
      ]
   },

   plugins : [
       new ExtracttTextPlugin('style.css')
   ]
};

module.exports = config;