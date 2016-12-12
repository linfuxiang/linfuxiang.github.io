// 所有模块都通过 define 来定义
define(function(require, exports, module) {
    require('jquery');
    require('vue');
    var links = require('paths');
    require('markdown');

    // console.log(module.dependencies);

    var hash = location.href.split('?')[1],
        url, m;
    if (hash != undefined) {
        var h = hash.split('-');
        if (h[1] == undefined) {
            url = '/article/' + hash + '.md';
        } else {
            url = '/article/' + h[0] + '/' + h[1] + '.md';
        }
        m = h[0];
    } else {
        // url = '/article/' + hash + '.txt';
    }

    var vm = new Vue({
        el: '#main',
        data: {
            header: m,
            head: '我是林富翔',
            article: '',
            links: links,
            items: [
                { m: 1 },
                { m: 2 },
                { m: 3 }
            ]
        },
        methods: {

        }
    });

    $.ajax({
        type: 'get',
        url: url,
        success: function(d) {
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
