'use strict';
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const path = require('path');
const webpack = require('webpack');

module.exports = merge(baseWebpackConfig, {
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: false,
        historyApiFallback: true,
        compress: false,
        inline: true,
        hot: true,
        host: '127.0.0.1',
        port: 8703,
        proxy : {
            '/api/*': {
                target: 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com',
                secure: false,
                changeOrigin: true,
                pathRewrite: {'^/api' : ''},
            }
        }
    },
    plugins: [
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        nodeEnv: 'development',
    }
});