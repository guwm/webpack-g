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

var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // context: 一般是指项目脚本运行的上下文，一般我们在根目录下运行
    // entry:  __dirname + '/src/script/main.js', //打包开始的入口文件
    // entry: ['./src/script/main.js','./src/script/a.js'], //将平行的main.js,a.js打包成了一个文件
    entry : {
        main: './src/script/main.js',
        a: './src/script/a.js'
    },

    //当多个输入，可以使用占位符使文件名唯一[name]=entry的key,[hash]=本次打包时候的hash,[chunkhash]=当文件变化时hash值会发生变化（比如上线时候只需要上线改动的文件）
    output : {
        path:  __dirname + '/dist',
        filename: 'js/[name]-[chunkhash].js',
        publicPath: 'http://cdn.com'//需要上线时候的占位符.所有的JS会添加这个绝对位置
    },

    plugins: [
        new htmlWebpackPlugin({ //支持类似JS的模版语言
            // filename: 'index-[hash].html',
            filename: 'index.html',
            template: 'index.html',
            // inject: 'head',//制定将我们的脚本放在head还是body 的标签里面
            inject: false,
            title: 'webpack is great!',//练习在模版中取参数
            //可以在https://www.npmjs.com/package/html-webpack-plugin查看对应配置项
            minify: {
                removeComments: true, //打包时候删除注释
                collapseWhitespace: true //删除空格
            }
        })
    ]
}