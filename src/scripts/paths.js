// 所有模块都通过 define 来定义
define(function(require, exports, module) {
	let js = '/dist/scripts/';
	let css = '/dist/css/';
	let article = '/htmls/article.html';
	let a = [{
			name: '首页',
			title: '首页',
			indexhref: './',
			href: '/'
		}, {
			name: 'vuecli3',
			title: 'Vue-CLI3',
			href: article + '?vuecli3',
			details: [{
					name: 'theory',
					title: '分析',
					href: '?vuecli3-theory'
				},
				{
					name: 'plugin',
					title: '插件系统',
					href: '?vuecli3-plugin'
				},
			]
		}, {
			name: 'postcss',
			title: 'PostCSS',
			href: article + '?postcss',
			details: []
		}, {
			name: 'parcel',
			title: 'Parcel',
			href: article + '?parcel',
			details: [{
				name: 'js',
				title: 'JS编译',
				href: '?parcel-js'
			}, {
				name: 'css',
				title: 'CSS编译',
				href: '?parcel-css'
			}, {
				name: 'vue',
				title: 'Vue单文件组件',
				href: '?parcel-vue'
			}]
		}, {
			name: 'vue2',
			title: 'Vue2.x',
			href: article + '?vue2',
			details: [{
				name: 'lifecycle',
				title: '生命周期',
				href: '?vue2-lifecycle'
				// }, {
				//     name: 'vue2-diff',
				//     title: '2.0与1.0的差异',
				//     href: '?vue2-diff'
			}, {
				name: 'transition',
				title: 'Transition',
				href: '?vue2-transition'
			}, {
				name: 'directive',
				title: '指令',
				href: '?vue2-directive'
			}, {
				name: 'plugin',
				title: '插件',
				href: '?vue2-plugin'
			}, {
				name: 'ssr',
				title: 'SSR',
				href: '?vue2-ssr'
			}, {
				name: 'components',
				title: 'Components',
				href: '?vue2-components'
			}, ]
		}, {
			name: 'vuex',
			title: 'Vuex',
			href: article + '?vuex',
			details: [{
				name: 'state',
				title: 'State',
				href: '?vuex-state'
			}, {
				name: 'getter',
				title: 'Getter',
				href: '?vuex-getter'
			}, {
				name: 'mutation',
				title: 'Mutation',
				href: '?vuex-mutation'
			}, {
				name: 'action',
				title: 'Action',
				href: '?vuex-action'
			}, {
				name: 'module',
				title: 'Module',
				href: '?vuex-module'
			}, {
				name: 'plugins',
				title: '插件',
				href: '?vuex-plugins'
			}, {
				name: 'more',
				title: '其他',
				href: '?vuex-more'
			}, ]
		}, {
			name: 'vueRouter',
			title: 'Vue-Router',
			href: '?vueRouter',
			details: [{
				name: 'more',
				title: '进阶',
				href: '?vueRouter-more'
			}, ]
		}, {
			name: 'wxblue',
			title: '微信硬件蓝牙api（前端开发）',
			href: article + '?wxblue',
			details: []
		}, {
			name: 'css3',
			title: 'CSS3',
			href: article + '?css3',
			details: [{
				name: 'animation',
				title: '动画',
				href: '?css3-animation'
			}, {
				name: 'clippath',
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
				name: 'es',
				title: 'ES',
				href: '?javascript-es',
			}, {
				name: 'object',
				title: '对象',
				href: '?javascript-object',
			}, {
				name: 'promise',
				title: 'Promise',
				href: '?javascript-promise',
			}, {
				name: 'async',
				title: 'Async Await',
				href: '?javascript-async',
			}, {
				name: 'ajax',
				title: 'Ajax',
				href: '?javascript-ajax',
			}, {
				name: 'clone',
				title: '深克隆',
				href: '?javascript-clone',
			}, {
				name: 'summary',
				title: 'Summary',
				href: '?javascript-summary',
			}]
		}, {
			name: 'webpack',
			title: 'Webpack',
			href: article + '?webpack',
			details: [{
				name: 'loader',
				title: 'Loader',
				href: '?webpack-loader',
			}, {
				name: 'plugin',
				title: 'Plugin',
				href: '?webpack-plugin',
			}, ]
		}, {
			name: 'chrome',
			title: 'Chrome扩展程序',
			href: article + '?chrome',
			details: []
		}, {
			name: 'canvas',
			title: 'Canvas',
			href: article + '?canvas',
			details: [{
				name: 'shapes',
				title: '绘制图形',
				href: '?canvas-shapes',
			}, {
				name: 'colors',
				title: '颜色',
				href: '?canvas-colors',
			}, ]
		}, {
			name: 'typescript',
			title: 'TypeScript',
			href: article + '?typescript',
			details: [{
				name: 'typeof',
				title: '基础类型',
				href: '?typescript-typeof',
			}, {
				name: 'interface',
				title: '接口',
				href: '?typescript-interface',
			}, {
				name: 'class',
				title: '类',
				href: '?typescript-class',
			}, {
				name: 'function',
				title: '函数',
				href: '?typescript-function',
			}, {
				name: 'enum',
				title: '枚举',
				href: '?typescript-enum',
			}, {
				name: 'modules',
				title: '模块',
				href: '?typescript-modules',
			}, {
				name: 'namespace',
				title: '命名空间',
				href: '?typescript-namespace',
			}, {
				name: 'jsx',
				title: 'JSX',
				href: '?typescript-jsx',
			}, {
				name: 'API',
				title: '开发文档',
				href: 'https://www.tslang.cn/docs/handbook/basic-types.html',
				isBlank: true
			}, ]
		}, {
			name: 'jest',
			title: 'Jest',
			href: article + '?jest',
			details: []
		},
		//  {
		// 	name: 'sea',
		// 	title: 'Sea',
		// 	href: article + '?sea',
		// 	details: []
		// },
		{
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
			name: 'net',
			title: '网络相关',
			href: article + '?net',
			details: []
		}, {
			name: 'security',
			title: '前端安全相关',
			href: article + '?security',
			details: []
		},
		// {
		//     name: 'little',
		//     title: 'Something',
		//     href: article + '?little',
		//     details: []
		// },
	];
	// exports.links = a;
	module.exports = a;
});
