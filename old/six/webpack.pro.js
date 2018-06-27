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
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

const ROOTPATH = path.resolve(__dirname, '.');

module.exports = merge(common, {
    output: {
        path: path.resolve(ROOTPATH, 'dist'), //打包的文件夹
        filename: '[name].[hash].bundle.js',
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
            filename: path.resolve(ROOTPATH, 'dist/index.html'), // the path to create html
            template: path.resolve(ROOTPATH, 'app/public/template.html'), //the path of template html,
            minify: false,
            // favicon: path.resolve(__dirname, 'app/images/cscec_favicon-2.ico')
        }),
        new CleanWebpackPlugin(['dist', 'dist.zip', 'dist.rar'], {exclude: ['lib']}),
        new CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js',
            minChunks: function (module, count) {
                // any required modules inside node_modules are extracted to vendor
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, './node_modules')
                    ) === 0
                )
            }
        }),
    ],
});