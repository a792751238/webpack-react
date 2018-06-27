/**
 * Created by easterCat on 2018/6/27.
 */
const path = require('path');
const ROOTPATH = path.resolve(__dirname, '.');

module.exports = {
    context: path.resolve(ROOTPATH, './app'),
    entry: './app.js',
    output: {
        path: path.resolve(ROOTPATH, './dist'),
        filename: 'app.js',
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules')
        ]
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react'],
                }
            }
        }, {
            test: /index\.html/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'index.[ext]'
                }
            }]
        }]
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        inline: true,//源文件改变,会自动刷新页面
        port: 1234,//设置默认监听端口，如果省略，默认为"8080"
    },
};