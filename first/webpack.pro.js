/**
 * Created by easterCat on 2017/10/30.
 */
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, 'dist'), //打包的文件夹
        filename: '[name].[hash].bundle.js',
        // filename: '[name].js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader']}),
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }]
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader", options: {importLoaders: 1}
                    }, {
                        loader: "postcss-loader"
                    }, {
                        loader: 'less-loader'
                    }]
                })
            },
            // {
            //     test: /template\.html/,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {
            //             name (file) {
            //                 return 'index.[ext]'
            //             }
            //         }
            //     }]
            // }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash].css',
            allChunks: true, // don't contain embedded styles
        }),
        //加入js压缩的实例
        new UglifyJsPlugin({
            mangle: {
                mangle: false
            },
            compress: {
                sequences: true,
                dead_code: true,
                conditionals: true,
                booleans: true,
                unused: false,
                if_return: true,
                join_vars: true,
                drop_console: false,
                warnings: false
            },
        }),
        new HtmlWebpackPlugin({
            title: '中建八局',
            filename: path.resolve(__dirname, 'dist/index.html'), // 生成的html存放路径
            template: path.resolve(__dirname, 'app/template.html'), // html模板路径,
            minify: false,
            favicon: path.resolve(__dirname, 'app/images/cscec_favicon-2.ico')
        }),
        new CleanWebpackPlugin(['dist', 'dist.zip', 'dist.rar'], {exclude: ['lib']}),
    ],
});