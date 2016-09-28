// 所有模块都通过 define 来定义
define(function(require, exports, module) {

  // 通过 require 引入依赖
  var $ = require('jquery');
  // var Spinning = require('./spinning');

  function init(){
  	console.log('started');
  }

  // 通过 exports 对外提供接口
  exports.init = init;

  // 或者通过 module.exports 提供整个接口
  // module.exports = 

});