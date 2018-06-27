/**
 * Created by easterCat on 2018/6/27.
 */
const path = require('path');
const ROOTPATH = path.resolve(__dirname, '.');

module.exports = {
    context: path.resolve(ROOTPATH, 'app'),
    resolve: {
        extensions: ['.js', '.jsx'], //后缀名自动补全,可以使用jsx的文件后缀
        modules: [path.resolve(ROOTPATH, "node_modules")],
        alias: {
            COMPONENTS_PATH: './components',
        }
    },
    entry: {
        app: ['babel-polyfill', './app.js']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                    }
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
        contentBase: path.resolve(ROOTPATH, './app'),//为一个目录下的文件提供本地服务器，在这里设置其所在目录
        historyApiFallback: true,//跳转将指向index.html
        inline: true,//开启自动刷新页面
        port: 1234,//设置默认监听端口，如果省略，默认为"8080"
        hot: true,//开启热替换
    },
    plugins: [],
};