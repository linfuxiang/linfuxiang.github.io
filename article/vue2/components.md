# Vue插件开发、发布和复用   
> 本文主要介绍如何开发一个简单的Vue单文件组件，如何作为一个插件发布到npm上，团队或其他小伙伴如何复用此组件

## 如何使用  
[官方文档](https://cn.vuejs.org/v2/guide/plugins.html#开发插件)说明，`Vue.js`的插件应当有一个公开方法`install`。这个方法的第一个参数是`Vue`构造器, 第二个参数是一个可选的选项对象。

	// my-plugin.js
	const plugin = {
	    install(Vue, options) {
	    	// 此处写插件相关代码
	    	// Vue.component()....
	    }
	}
	export default plugin

与使用vue-router,vuex,axios等插件的方法一样，我们这样使用一个插件：

	// 1. ES6
	import plugin from 'my-plugin'

	// 2. require
	var plugin = require('my-plugin')

	// 并使用Vue.use注册插件
	Vue.use(plugin)

	// 3. 直接引入js文件
	<script src="my-plugin.js"></script>

## 如何开发  
接下来，我们一步一步开发一个简单的单文件组件，为了简单高效，我们直接使用`vue-cli`进行构建：
	
	mkdir myplugin	// 创建文件夹
	cd myplugin		// 进入文件夹
	vue init webpack-simple		// 构建，选项可根据自身需求选择

以我的开发目录为例，创建如下`lib`目录：

	├── src
	│   ├── lib                        	// 插件目录
	│   │   ├── index.js               	// 最终使用webpack构建的时候作为插件入口
	│   │   ├── my-plugin.vue   		// 单文件组件
	│   ├── App.vue
	│   ├── main.js
	├── index.html

构建一个简单的`my-plugin.vue`模板

	<template>
	    <div>
	        {{ title }}
	    </div>
	</template>
	<script>
		export default {
		    name: 'my-plugin',
		    data() {
		        return {
		        }
		    },
		    props: {
		        title: {
		            type: String,
		            default: '我一个普通的插件'
		        },
		    },
		    methods: {
		    }
		}
	</script>
	<style scoped>
	</style>

插件入口`index.js`的内容如下：

	import myPlugin from './my-plugin.vue'	//引用单文件组件
	const component = {
	    install(Vue, options) {
	        Vue.component(myPlugin.name, myPlugin)
	    }
	}
	if (typeof window !== 'undefined' && window.Vue) {	//解决script标签直接引用无法使用插件的问题
	    window.Vue.use(component);
	}
	export default component

并在`main.js`中引入并注册

	import plugin from './lib/my-plugin'
	Vue.use(plugin)

然后就可以在`App.vue`引入该组件进行开发啦

	<my-plugin></my-plugin>

## 如何发布  
开发完成后，不只是自己一个人使用，这个时候需要发布到npm上，任何人都可以下载使用，但在发布之前需要修改一下`webpack.config.js`和`package.json`：

	// webpack.config.js
	entry: './src/lib/index.js',		// 修改插件入口为index.js
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'my-plugin.js',	// 打包后的文件名
        library: 'myPlugin', // library指定的就是使用require时的模块名，require("myPlugin")
        libraryTarget: 'umd', // libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的。
        umdNamedDefine: true, // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define。
    },

    // package.json
	"version": "1.0.4",		// 每次更新代码的时候记得修改版本号
    "private": false,		// 必须设为false才可发布

	"license": "MIT",
	"main": "dist/my-plugin.js",	// 这是入口文件路径
	"repository": {
		"type": "git",
		"url": "https://github.com/linfuxiang/vue-lfx-test"		// 这是项目的git地址，通过npm安装的时候会从此处下载
	}

现在就真的可以发布了（记得修改一下`readme`，不然别人可看不懂这插件怎么用），这个时候请注册一个`npm`帐号：

	npm adduser
	Username: your name
	Password: your password
	Email: your e-mail
	// 如果已有帐号，则登录
	npm login

	npm whoami	// 检查是否登录成功
	npm publish // 发布，每次发布的时候记得检查package.json中的版本号

> PS:在提交代码到代码库的时候还需要修改.gitignore文件，dist中的文件也要上传。本文仅介绍Vue单文件组件式的插件开发，其他如[官方文档](https://cn.vuejs.org/v2/guide/plugins.html#开发插件)中的的插件开发也可通过本文案例举一反三。

参考插件例子：  
[vue-lfx-test](https://github.com/linfuxiang/vue-lfx-test)  
> PS:例子模板优化中

参考文献：  
[官方文档](https://cn.vuejs.org/v2/guide/plugins.html#开发插件)  
[vue插件开发与发布](http://www.jianshu.com/p/d6855556cd75)  