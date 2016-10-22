// 所有模块都通过 define 来定义
define(function(require, exports, module) {
  var a = [
    {
      name: '首页',
      indexhref: './',
      href: '../'
    },
  	{
  		name: 'ajax',
  		indexhref: 'htmls/ajax.html',
  		href: 'ajax.html'
  	},
  	{
  		name: 'vue.js',
  		indexhref: 'htmls/vue.html',
  		href: 'vue.html'
  	}
  ];
  exports.links = a;

});