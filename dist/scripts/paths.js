'use strict';

// 所有模块都通过 define 来定义
define(function (require, exports, module) {
    var js = '/dist/scripts/';
    var css = '/dist/css/';
    var article = '/htmls/article.html';
    var a = [{
        name: '首页',
        indexhref: './',
        href: '/'
    }, {
        name: 'ajax',
        href: article + '?ajax',
        details: []
    }, {
        name: 'vue',
        href: article + '?vue',
        details: [{
            name: '数据绑定',
            href: '?vue-dataBinding'
        }, {
            name: '计算属性computed',
            href: '?vue-computed'
        }, {
            name: 'Class 与 Style',
            href: '?vue-class'
        }, {
            name: '条件',
            href: '?vue-conditional'
        }, {
            name: '列表',
            href: '?vue-list'
        }, {
            name: '事件处理器',
            href: '?vue-events'
        }, {
            name: '组件',
            href: '?vue-components'
        }, {
            name: 'vue-cli',
            href: '?vue-cli'
        }, {
            name: 'vue-cli + vue-router + vuex',
            href: '?vue-pro'
        }, {
            name: 'API',
            href: 'http://cn.vuejs.org/api/',
            isBlank: true
        }]
    }, {
        name: 'sea',
        href: article + '?sea',
        details: []
    }, {
        name: 'node',
        href: article + '?node',
        details: [{
            name: 'Express',
            href: '?node-express'
        }]
    }, {
        name: 'mongoDB',
        href: article + '?mongoDB',
        details: []
    }, {
        name: 'Linux',
        href: article + '?linux',
        details: []
    }, {
        name: 'Sublime Text 3',
        href: article + '?sublime',
        details: []
    }, {
        name: '小东西',
        href: article + '?little',
        details: []
    }];
    // exports.links = a;
    module.exports = a;
});