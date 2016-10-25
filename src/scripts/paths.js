// 所有模块都通过 define 来定义
define(function(require, exports, module) {
  var js = '/dist/scripts/';
  var css = '/dist/css/';
  var article = '/htmls/article.html';
  var a = [
    {
      name: '首页',
      indexhref: './',
      href: '/'
    },
  	{
  		name: 'ajax',
  		href: article + '?ajax',
      details: []
  	},
  	{
  		name: 'vue',
  		href: article + '?vue',
      details: [
        {
          name: '数据绑定',
          href: '?vue-dataBinding'
        },
        {
          name: '计算属性',
          href: '?vue-computed'
        },
        {
          name: '未完待续',
          href: '?vue-continue'
        }
      ]
  	},
    {
      name: 'sea',
      href: article + '?sea',
    }
  ];
  // exports.links = a;
  module.exports = a;

});