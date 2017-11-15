'use strict';

// 所有模块都通过 define 来定义
define(function (require, exports, module) {
    var js = '/dist/scripts/';
    var css = '/dist/css/';
    var article = '/htmls/article.html';
    var a = [{
        name: '首页',
        title: '首页',
        indexhref: './',
        href: '/'
    }, {
        name: 'wxblue',
        title: '微信硬件蓝牙api（前端开发）',
        href: article + '?wxblue',
        details: []
    }, {
        name: 'vue2',
        title: 'Vue2.x',
        href: article + '?vue2',
        details: [{
            name: 'vue2-diff',
            title: '2.0与1.0的差异',
            href: '?vue2-diff'
        }, {
            name: 'vue2-components',
            title: 'Components',
            href: '?vue2-components'
        }]
    }, {
        name: 'css3',
        title: 'CSS3',
        href: article + '?css3',
        details: [{
            name: 'clip-path',
            title: 'Clippath',
            href: '?css3-clippath'
        }, {
            name: 'grid',
            title: 'Grid',
            href: '?css3-grid'
        }]
    }, {
        name: 'javascript',
        title: 'JavaScript',
        href: article + '?javascript',
        details: [{
            name: 'promise',
            title: 'Promise',
            href: '?javascript-promise'
        }, {
            name: 'async',
            title: 'Async Await',
            href: '?javascript-async'
        }, {
            name: 'ajax',
            title: 'Ajax',
            href: '?javascript-ajax'
        }]
    }, {
        name: 'typescript',
        title: 'TypeScript',
        href: article + '?typescript',
        details: [{
            name: 'typeof',
            title: '基础类型',
            href: '?typescript-typeof'
        }, {
            name: 'interface',
            title: '接口',
            href: '?typescript-interface'
        }, {
            name: 'class',
            title: '类',
            href: '?typescript-class'
        }, {
            name: 'function',
            title: '函数',
            href: '?typescript-function'
        }, {
            name: 'enum',
            title: '枚举',
            href: '?typescript-enum'
        }, {
            name: 'modules',
            title: '模块',
            href: '?typescript-modules'
        }, {
            name: 'API',
            title: '开发文档',
            href: 'https://www.tslang.cn/docs/handbook/basic-types.html',
            isBlank: true
        }]
    }, {
        name: 'sea',
        title: 'Sea',
        href: article + '?sea',
        details: []
    }, {
        name: 'node',
        title: 'Node.js',
        href: article + '?node',
        details: [{
            name: 'express',
            title: 'Express',
            href: '?node-express'
        }]
    }, {
        name: 'mongoDB',
        title: 'mongoDB数据库',
        href: article + '?mongoDB',
        details: []
    }, {
        name: 'linux',
        title: 'Linux系统操作',
        href: article + '?linux',
        details: []
    }, {
        name: 'sublime',
        title: 'Sublime Text 3',
        href: article + '?sublime',
        details: []
    }, {
        name: 'little',
        title: '小东西',
        href: article + '?little',
        details: []
    }, {
        name: 'vue',
        title: 'Vue1.x',
        href: article + '?vue',
        details: [{
            name: 'dataBinding',
            title: '数据绑定',
            href: '?vue-dataBinding'
        }, {
            name: 'computed',
            title: '计算属性computed',
            href: '?vue-computed'
        }, {
            name: 'class',
            title: 'Class 与 Style',
            href: '?vue-class'
        }, {
            name: 'conditional',
            title: '条件判断',
            href: '?vue-conditional'
        }, {
            name: 'list',
            title: '列表渲染',
            href: '?vue-list'
        }, {
            name: 'events',
            title: '事件处理器',
            href: '?vue-events'
        }, {
            name: 'components',
            title: '组件',
            href: '?vue-components'
        }, {
            name: 'vue-cli',
            title: 'vue脚手架',
            href: '?vue-cli'
        }, {
            name: 'API',
            title: 'API',
            href: 'http://cn.vuejs.org/api/',
            isBlank: true
        }]
    }];
    // exports.links = a;
    module.exports = a;
});