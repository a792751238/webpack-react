/**
 * Created by easterCat on 2017/10/30.
 */
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'app'),
    resolve: {
        modules: [
            path.resolve(__dirname, "node_modules")
        ],
        alias: {
            Components_src: path.resolve(__dirname, 'app/modules/safety/'),
            Util_src: path.resolve(__dirname, 'app/utils/'),
            Util_rest$: path.resolve(__dirname, 'app/utils/rest/rest.js'),
            Util_session$: path.resolve(__dirname, 'app/utils/sessionStorage/sessionStorage.js'),
            Util_format$: path.resolve(__dirname, 'app/utils/Date/format.js'),
            PDF_JS$: path.resolve(__dirname, 'app/lib/pdf-js/build/pdf.js'),
            Kiana$: path.resolve(__dirname, 'app/utils/kiana/index.js'),
            Images: path.resolve(__dirname, 'app/images/'),
            Cmpt$: path.resolve(__dirname, 'app/utils/cmpt/cmpt.js'),
        }
    },
    entry: {
        app: ['babel-polyfill', './app.js'],
        vendor: './vendor.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'), //打包的文件夹
        // filename: '[name].[hash].bundle.js',
        filename: '[name].js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'images/[name].[ext]'
                    }
                }, {
                    loader: 'image-webpack-loader'
                }]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: false
                    }
                }],
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 50000,
                    }
                }]
            }
        ]
    },
    devServer: {
        contentBase: './app',//为一个目录下的文件提供本地服务器，在这里设置其所在目录
        historyApiFallback: true,//跳转将指向index.html
        // inline: true,//开启自动刷新页面
        port: 4333,//设置监听端口4333
        //hot: true,//开启热替换
    },
    plugins: [
        new CopyWebpackPlugin([
            // pdfjs
            {from: './lib/pdf-js', to: './lib/pdf-js'},
            {from: './lib/gantt', to: './lib/gantt'},
            //fileShare
            {from: '../node_modules/zj_webshare/build/index.html', to: 'fileShare.html'},
            {from: '../node_modules/zj_webshare/build/fileShare.js'},
            {from: '../node_modules/zj_webshare/build/fileShare.css'},
        ])
    ],
};