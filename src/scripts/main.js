// 所有模块都通过 define 来定义
define(function(require, exports, module) {
    let links = require('paths');
    require('markdown');

    var vm = new Vue({
        el: '#index-vue',
        data: {
            head: '我是林富翔',
            article: '',
            links: links
        },
        mounted() {
            this.$http.get('article/index.md').then(function(response) {
                if (typeof response.body === 'string' && response.body !== '') {
                    var converter = new Markdown.Converter();
                    var htm = converter.makeHtml(response.body);
                    vm.article = htm;
                }
                // 响应成功回调
            }, function(response) {
                // 响应错误回调
            });
        },
    });
    document.querySelector('#main').style.height = document.querySelector('.b-inner-img').getBoundingClientRect().height + 'px';
    var outer = document.querySelector('.b-outer'),
        inner = document.querySelector('.b-inner');
    var value = 'clip-path:circle(10% at 50% 50%);';
    var str = '-webkit-' + value + '-o-' + value + '' + value;
    inner.style.cssText = str;
    var getAbsPoint = () => {
        if(inner.getBoundingClientRect) {
            return inner.getBoundingClientRect();
        }
    }
    if (!inner.style.cssText) {
        inner.style.cssText = 'background-image: none;';
    } else {
        inner.style.cssText = '';
        outer.addEventListener('mousemove', function(e) {
            // console.log(e);
            // console.log(e.clientX,e.clientY);
            var getAbsPointe = getAbsPoint();
            var value = 'clip-path:circle(10% at ' + (e.clientX - getAbsPointe.left) + 'px ' + (e.clientY - getAbsPointe.top) + 'px);';
            var str = '-webkit-' + value + '-o-' + value + '' + value;
            inner.style.cssText = str;
        });
        outer.addEventListener('mouseout', function(e) {
            // console.log(e);
            // console.log(e.clientX,e.clientY);
            var value = 'clip-path:circle(0% at 50% 50%);';
            var str = '-webkit-' + value + '-o-' + value + '' + value;
            inner.style.cssText = str;
        });
        outer.addEventListener('touchmove', function(e) {
            e.preventDefault();
            // console.log(e.changedTouches[0]);
            // console.log(e.changedTouches[0].clientX,e.changedTouches[0].clientY);
            var getAbsPointe = getAbsPoint();
            var value = 'clip-path:circle(10% at ' + (e.changedTouches[0].clientX - getAbsPointe.left) + 'px ' + (e.changedTouches[0].clientY - getAbsPointe.top) + 'px);';
            var str = '-webkit-' + value + '-o-' + value + '' + value;
            inner.style.cssText = str;
        });
        outer.addEventListener('touchend', function(e) {
            e.preventDefault();
            // console.log(e.changedTouches[0]);
            // console.log(e.changedTouches[0].clientX,e.changedTouches[0].clientY);
            var value = 'clip-path:circle(0% at 50% 50%);';
            var str = '-webkit-' + value + '-o-' + value + '' + value;
            inner.style.cssText = str;
        });
    }

    // require('echarts');
    // let myChart = echarts.init(document.getElementById('main'));
    // let data = [];

    // for (let i = 0; i <= 100; i++) {
    //     let theta = i / 100 * 360;
    //     let r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
    //     data.push([r, theta]);
    // }

    // let option = {
    //     title: {
    //         // text: 'Heart'
    //     },
    //     legend: {
    //         data: ['心的位置']
    //     },
    //     polar: {},
    //     tooltip: {
    //         trigger: 'axis',
    //         axisPointer: {
    //             type: 'cross'
    //         }
    //     },
    //     angleAxis: {
    //         type: 'value',
    //         startAngle: 0
    //     },
    //     radiusAxis: {},
    //     series: [{
    //         coordinateSystem: 'polar',
    //         name: '心的位置',
    //         type: 'line',
    //         data: data
    //     }]
    // };
    // myChart.setOption(option);

    // 通过 exports 对外提供接口
    // exports.init = init;

    // 或者通过 module.exports 提供整个接口
    // module.exports = init; 

});
