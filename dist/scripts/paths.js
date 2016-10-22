'use strict';

// 所有模块都通过 define 来定义
define(function (require, exports, module) {
  var js = '/dist/scripts/';
  var css = '/dist/css/';
  var a = [{
    name: '首页',
    indexhref: './',
    href: '/'
  }, {
    name: 'ajax',
    // indexhref: 'htmls/ajax.html',
    href: '/htmls/ajax.html',
    details: []
  }, {
    name: 'Vue.js',
    // indexhref: 'htmls/vue.html',
    href: '/htmls/vue.html',
    details: [{
      name: '数据绑定',
      href: '?dataBinding'
    }, {
      name: '计算属性',
      href: '?computed'
    }]
  }];
  exports.links = a;
});