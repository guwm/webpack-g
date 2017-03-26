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
module.exports = {
    // entry:  __dirname + '/src/script/main.js', //打包开始的入口文件
    // entry: ['./src/script/main.js','./src/script/a.js'], //将平行的main.js,a.js打包成了一个文件
    entry : {
        main: './src/script/main.js',
        a: './src/script/a.js'
    },

    //当多个输入，可以使用占位符使文件名唯一[name]=entry的key,[hash]=本次打包时候的hash,[chunkhash]=当文件变化时hash值会发生变化（比如上线时候只需要上线改动的文件）
    output : {
        path:  __dirname + '/dist/js',
        filename: '[name]-[chunkhash].js'
    }
}