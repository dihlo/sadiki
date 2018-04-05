var path = require('path');
var webpack = require('webpack');
const fs  = require('fs');
const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './ant-theme-vars.less'), 'utf8'));

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './code/js/index.js',
    module: {
        loaders: [
            {
              test: /\.css$/,  
              include: /node_modules/,  
              loaders: ['style-loader', 'css-loader'],
            },
            {
              test: /\.less$/,
              loader: 'style-loader!css-loader!less-loader',
              query: {
                modifyVars: themeVariables
              }
            },
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel', 
              query: {
                plugins: [
                  ['import', { libraryName: "antd", style: true }]
                ]
              }
            },        
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ],
        rules: [
            {
              loader: 'babel-loader',
              exclude: /node_modules/,
              test: /\.js$/,
              options: {
                presets: [ "es2015","react"],
                plugins: [
                  ['import', { libraryName: "antd", style: true }]
                ]
              },
            },
            {
              test: /\.less$/,
              use: [
                {loader: "style-loader"},
                {loader: "css-loader"},
                {loader: "less-loader",
                  options: {
                    modifyVars: themeVariables
                  }
                }
              ]
            }            
        ]              
    },
    output: {
        path: 'src',
        filename: 'js/bundle.min.js'
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
