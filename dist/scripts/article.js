'use strict';

// 所有模块都通过 define 来定义
define(function (require, exports, module) {
    var links = require('paths');
    require('markdown');

    document.title = '\u6211\u7684\u535A\u5BA2';

    var hash = location.href.split('?')[1],
        url = void 0,
        m = void 0,
        n = void 0;
    if (hash != undefined) {
        var h = hash.split('-');
        if (h[1] == undefined) {
            url = '/article/' + hash + '.md';
        } else {
            url = '/article/' + h[0] + '/' + h[1] + '.md';
        }
        m = h[0];
        n = h[1];
    } else {
        // url = '/article/' + hash + '.txt';
    }
    for (var i = 0; i < links.length; i++) {
        if (links[i].name == m) {
            if (n) {
                for (var j = 0; j < links[i].details.length; j++) {
                    if ('?' + m + '-' + n == links[i].details[j].href) {
                        document.title = '\u6211\u7684\u535A\u5BA2-' + links[i].details[j].name;
                    }
                }
            } else {
                document.title = '\u6211\u7684\u535A\u5BA2-' + links[i].name;
            }
        }
    }

    var vm = new Vue({
        el: '#main',
        data: {
            header: m,
            head: '我是林富翔',
            article: '',
            links: links,
            items: []
        },
        mounted: function mounted() {
            this.$http.get(url).then(function (response) {
                var converter = new Markdown.Converter();
                var htm = converter.makeHtml(response.body);
                vm.article = htm;
                // 响应成功回调
            }, function (response) {
                // 响应错误回调
            });
        }
    });

    // 通过 exports 对外提供接口
    // exports.init = init;

    // 或者通过 module.exports 提供整个接口
    // module.exports = init; 
});