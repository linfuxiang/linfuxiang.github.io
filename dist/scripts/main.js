'use strict';

// 所有模块都通过 define 来定义
define(function (require, exports, module) {
  var $ = require('jquery');
  require('vue');

  function init() {
    console.log('started');
  }

  var vm = new Vue({
    el: '#index-vue',
    data: {
      head: '我是林富翔'
    }
  });

  // 通过 exports 对外提供接口
  exports.init = init;

  // 或者通过 module.exports 提供整个接口
  // module.exports = init; 
});