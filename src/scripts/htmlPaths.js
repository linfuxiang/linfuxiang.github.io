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
  		name: 'Vue.js',
  		indexhref: 'htmls/vue.html',
  		href: 'vue.html',
      details: [
        {
          name: '数据绑定',
          href: 'vueDetails/dataBinding.html'
        }
      ]
  	}
  ];
  exports.links = a;

});