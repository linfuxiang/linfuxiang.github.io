# Sea.js
## 什么是Javascript模块化  
随着网站工程越来越庞大，传统的Javascript代码也会相应地变得越来越庞大、复杂、难以管理，在一个多人开发团队中，协作开发将变得十分困难，变量被覆盖？excuse me，大兄弟，我可是写了很久的。模块化编程出现来解决这个问题了，开发者只需要负责实现自己的业务逻辑，也就是开发一个模块，而其他人也可以加载使用这些模块，不用担心会发生冲突，只要你相信别人写的代码。也可以把这些模块想象成汽车的配件，一起组装成一辆帅气的汽车，当然也可以不用别人开发的引擎，只组装成一辆模型车。这也是模块化的一个很强大的特性：高可重用性。
## 为什么使用Sea.js
> Sea.js 追求简单、自然的代码书写和组织方式，具有以下核心特性：  
1.	简单友好的模块定义规范：`Sea.js`遵循 `CMD`规范，可以像 `Node.js`一般书写模块代码。  
2.	自然直观的代码组织方式：依赖的自动加载、配置的简洁清晰，可以让我们更多地享受编码的乐趣。  
`Sea.js`还提供常用插件，非常有助于开发调试和性能优化，并具有丰富的可扩展接口。  

## 怎么使用Sea.js
#### seajs.config()  
对Sea进行配置  

	seajs.config({

		// 基础路径
		base: 'http://localhost/',

		// 路径配置，目录结构深或者跨目录调用模块时使用路径配置
		paths: {
			'a': 'http://www.baidu.com/a',	//跨目录
			'b': 'path/app'		//目录结构深
		},

		// 别名配置，与路径配置的区别为，别名配置直接定位到模块
		alias: {

		},
		
		// 变量配置，用{lfx}来表示变量
		vars: {
			'lfx': 'watermelon'
		},
		
		// 映射配置
		map: [
			['.js', '-debug.js']
		],
		
		// 预加载项，在普通模块加载前，提前加载某些模块，空字符串将被忽略
		preload: [
			Function.prototype.bind ? '' : 'es5-safe',
	    	this.JSON ? '' : 'json'
		],

		// 调试模式，值为 true 时，加载器不会删除动态插入的 script 标签。插件也可以根据 debug 配置，来决策 log 等信息的输出
		debug: true,

		// 文件编码
		charset: 'utf-8'
		// charset也可以是一个函数
		charset: function(url) {
			// xxx 目录下的文件用 gbk 编码加载
			if (url.indexOf('http://example.com/js/xxx') === 0) {
				return 'gbk';
			}
			// 其他文件用 utf-8 编码
			return 'utf-8';
		}
	}); 

注意：多次配置将会自动合并

#### seajs.use()  
模块的加载启动
	
	// 加载当前目录下的a模块，在加载完成时执行指定回调函数
	seajs.use('./a', function(d){
		d.init();
	});

	// 还可以一次加载多个模块
	seajs.use(['./a', './b'], function(a, b){
		a.init();
		b.init();
	});
	// 回调函数是可选的

在调用`seajs.use`之前，需要先引入`sea.js`文件

	<script src="sea.js"></script>	//也可以源码内嵌，但需要通过 seajs.config 手动配置 base 路径

最佳实践  
1. `seajs.use`应只用于加载启动，不应出现在`define`的模块里，如需在模块中异步加载其他模块，应使用`require.async()`。  
2. 推荐在引入`sea.js`时在`script`标签上加上`id="seajsnode"`，可以让`sea.js`直接获取到自身路径，对性能有一定提升。

#### define, require, require.async, exports, module
模块的定义  

	// a模块
	define(function(require, exports, module){

		var data = 'lfx&watermelon';
		// 有两种方法对外提供接口
		exports.outerData = data;
		module.exports = data;
	});

	// b模块
	define(function(require, exports, module){

		// 对应的两种方法获取a模块的接口
		var a = require('./a').outerData;
		var a = require('./a');

		console.log(a);		// 'lfx&watermelon'

		// 异步加载模块
		require.async('./a', function(a){
			// 加载完成后的回调函数
		});

		// 解析模块路径，并返回，但不会加载模块
		require.resolve('./a');

		module.uri		// 模块的绝对路径
		module.dependencies		// 输出当前模块所有依赖的数组
	});

更多模块定义查看[CMD 模块定义规范](https://github.com/seajs/seajs/issues/242)
