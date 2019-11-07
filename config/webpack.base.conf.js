'use strict'
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/main.js',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "[name].js",
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    // loader
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        })
    ]
};