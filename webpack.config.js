/*
* @Author: guwenmei
* @Date:   2017-03-26 10:11:38
* @Last Modified by:   guwenmei
* @Last Modified time: 2017-03-26 11:03:22
*/

/**
 * commonJs的模块导出module.exports
 * 在命令行直接执行webpack，默认实行webpack.config.js,如果配置文件改名，则使用webpack --config + 配置文件名来执行
 * __dirname可以取到当前项目目录所在路径/Users/may/workspace/mySpace/webpack-self
 * 多页面应用会将entry定义成对象，key-value的形式
 */

var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

module.exports = {
    // context: 一般是指项目脚本运行的上下文，一般我们在根目录下运行
    // entry:  __dirname + '/src/script/main.js', //打包开始的入口文件
    //__dirname 属于node原生的，获取项目现在的路径，加上拼接的得到绝对路径
    // entry: ['./src/script/main.js','./src/script/a.js'], //将平行的main.js,a.js打包成了一个文件
    // context: __dirname,
    entry : {
        main: './src/app.js',
    },
    output : {
        path:  __dirname + '/dist',
        filename: 'js/[name]-bundle.js'
    },
    module: {
        loaders : [
            {
                test: /\.js$/, //以JS结尾的文件
                loader: 'babel-loader',
                // exclude: /node_modules/,
                exclude: path.resolve(__dirname, 'node_modules'),//解析成绝对路径
                // include: /src/,
                include:  path.resolve(__dirname, 'src'),
                query: {
                    presets: ['latest'] //或者在配置config.js文件指定，或者建.babelrc文件
                }
            },
            {
                test: /\.css$/,
                // loader: "style-loader!css-loader!postcss-loader", //这个写法是从后往前处理，或者试用一下数组写法,
                loaders:["style-loader","css-loader"],
            },
            {
                test: /\.less$/,
                // loader: "style-loader!css-loader!postcss-loader", //这个写法是从后往前处理，或者试用一下数组写法,
                loaders:["style-loader","css-loader","less-loader"],
            },
        ]
    },
    // postcss: [ //webpack2不支持自定义属性写法？？未解决
    //     require('autoprefixer')({
    //         broswers: ['last 5 version']//对浏览器进行指定,给浏览器加前缀
    //     }) //commonJS 语法
    // ],
    plugins: [
        new htmlWebpackPlugin({ 
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'//制定将我们的脚本放在head还是body 的标签里面
        })
    ]
}