const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/app/index.js',
    output:{
        path:path.resolve('dist'),
        filename:'bundle.js'
    },

    mode:'production',
    
    devServer:{
        port:3000
    },

    module: {
        rules: [
          {
            test: /\.(scc|scss)$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader'],
          },
        ],
      },

    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new MiniCssExtractPlugin({filename:'main.css'})
      ]
};