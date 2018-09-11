// 所有模块都通过 define 来定义
define(function(require, exports, module) {
    let links = require('paths');
    require('markdown');

    document.title = `LFX的博客`;

    let hash = location.href.split('?')[1],
        url, m, n;
    if (hash != undefined) {
        let h = hash.split('-');
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
    for (let i = 0; i < links.length; i++) {
        if (links[i].name == m) {
            if (n) {
                for (var j = 0; j < links[i].details.length; j++) {
                    if (`?${m}-${n}` == links[i].details[j].href) {
                        document.title = `LFX的博客-${links[i].title}-${links[i].details[j].title}`;
                    }
                }
            } else {
                document.title = `LFX的博客-${links[i].title}`;
            }
        }
    }

    window.vm = new Vue({
        el: '#main',
        data: {
            header: m,
            head: '我是林富翔',
            article: '',
            links: links,
            items: [

            ],
            name: '',
        },
        mounted() {
            let search = location.search.slice(1).split('-');
            this.name = search[search.length - 1];
            this.$http.get(url).then((response) => {
                let converter = new Markdown.Converter();
                let htm = converter.makeHtml(response.body);
                vm.article = htm;
                this.$nextTick(() => {
                    document.querySelectorAll('#main-content a').forEach(function(item, index) {
                        item.setAttribute('target', '_blank');
                    });
                    hljs.initHighlightingOnLoad();
                    document.querySelectorAll('pre code').forEach(function(item) {
                        hljs.highlightBlock(item);
                    });
                });
                // 响应成功回调
            }, (response) => {
                // 响应错误回调
            });

        }
        // 通过 exports 对外提供接口
        // exports.init = init;

        // 或者通过 module.exports 提供整个接口
        // module.exports = init; 

    });

});