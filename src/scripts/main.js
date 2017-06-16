// 所有模块都通过 define 来定义
define(function(require, exports, module) {
    require('jquery');
    require('vue');
    let links = require('paths');
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
        url: 'article/index.md',
        success(d) {
            var converter = new Markdown.Converter();
            var htm = converter.makeHtml(d);
            vm.article = htm;
        }
    });

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
