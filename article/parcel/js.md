# JavaScript打包  
在编写JavaScript时可能会用到ES6/ES7/TypeScript/React等语法，在此举例使用**Babel**。

### Babel  

	npm i babel-core babel-preset-env -D	// 对ES6语法进行转换
	npm i babel-polyfill -S		// 对ES6的api进行转换
	npm i babel-plugin-transform-runtime babel-runtime -D 	// Parcel中,polyfill需要配合transform-runtime进行使用

**.babelrc**

	// Babel配置文件
	{
	    "presets": ["env"],
	    "plugins": ["transform-runtime"]
	}

**index.js**

	import 'babel-polyfill'

	let arr = [...new Set([1, 2, 1, 2, 3])]
	console.log(arr.includes(1))

	function timeout(ms) {
	    return new Promise((resolve, reject) => {
	        setTimeout(resolve, ms, 'done')
	    })
	}
	timeout(100).then((value) => {
	    console.log(value)
	})