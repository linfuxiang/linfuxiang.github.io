// 所有模块都通过 define 来定义
define(function(require, exports, module) {
  require('jquery');
  require('vue');
  var links = require('htmlPaths').links;
  require('markdown');

  var vm = new Vue({
    el: '#index-vue',
    data: {
      head: '我是林富翔',
      article: '',
      links: links
    }
  });

  $.ajax({
    type: 'get',
    url: 'article/index.txt',
    success: function(d){
      var converter = new Markdown.Converter();
      var htm = converter.makeHtml(d);
      vm.article = htm;
    }
  });

  // 通过 exports 对外提供接口
  // exports.init = init;

  // 或者通过 module.exports 提供整个接口
  // module.exports = init; 

});