// 所有模块都通过 define 来定义
define(function(require, exports, module) {
    var links = require('paths');
    require('markdown');

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

            ],
        },
        mounted() {
            this.$http.get(url).then(function(response) {
                var converter = new Markdown.Converter();
                var htm = converter.makeHtml(response.body);
                vm.article = htm;
                // 响应成功回调
            }, function(response) {
                // 响应错误回调
            });
        },
    });

    // 通过 exports 对外提供接口
    // exports.init = init;

    // 或者通过 module.exports 提供整个接口
    // module.exports = init; 

});
