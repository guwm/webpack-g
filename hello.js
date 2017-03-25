/*
* @Author: guwenmei
* @Date:   2017-03-25 16:17:33
* @Last Modified by:   guwenmei
* @Last Modified time: 2017-03-25 17:01:14
*/

/*
    webpack 支持三种模块化方式
    AMD
    commonJs
    ES6模块化
 */

//commonJs方式
require('./world.js')   

/**
 * webpack天生不支持.css，要支持的话需要对应的loader(css-loader style-loader)
 * 除了直接这样制定loader 还可以通过命令行工具指定(webpack hello.js hello.bundle.js  --module-bind 'css=style-loader!css-loader')后加
 * --watch可以自动更新 
 * --progress 可以看到打包进度条
 * --display-modules 查看打包的模块 等等
 * require('style-loader!css-loader!./style.css')     
*/
require('./style.css') 

function hello(str) {
    alert(str);
}

hello("hello world");