/**
 * Created by easterCat on 2017/10/30.
 */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');

const ROOTPATH = path.resolve(__dirname, '.');

module.exports = merge(common, {
    output: {
        path: path.resolve(ROOTPATH, 'dist'), //打包的文件夹
        filename: '[name].js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }],
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                        outputStyle: 'expanded',
                        sourceMapContents: true
                    }
                }]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'less-loader',
                    options: {
                        sourceMap: true,
                        outputStyle: 'expanded',
                        sourceMapContents: true,
                    }
                }]
            },
            {
                test: /index\.html/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'index.[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [],
});