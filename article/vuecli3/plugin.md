# 如何写插件 
前面已经简单解释了**Vue CLI 3**是如何工作的，那么当项目里想要做一些特别的功能的时候，例如一键构建并提交仓库的时候，我们就可以做一个自定义的插件或者公共插件来复用。  
  
下面将示范开发和使用`本地插件`：  

1. 先在**package.json**增加`vuePlugins`属性  

		"vuePlugins": {
	    	"service": ["vue-cli-plugin-demo.js"]
	  	}

2. 再增加命令  
   
		"scripts": {
			"demo": "vue-cli-service demo"
		}

2. 新建**vue-cli-plugin-demo**插件文件，`api`参数在**cli-service/lib/PluginAPI.js**生成

		module.exports = (api, options) => {
			api.chainWebpack(webpackConfig => {
				// 通过 webpack-chain 修改 webpack 配置
			})
			api.configureWebpack(webpackConfig => {
				// 修改 webpack 配置
				// 或返回通过 webpack-merge 合并的配置对象
			})
		    api.registerCommand('demo', (args, rawArgv) => {
		    	// 可以调用其他注册的插件的方法
		        api.service.commands.serve.fn(args, rawArgv).then(res => {
		        })
		        // ...插件执行代码
		    })
		}

		// 如果需要运行在特定的环境下，加这段代码
		module.exports.defaultModes = {
			demo: 'production'
		}