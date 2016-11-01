[express文档](http://www.expressjs.com.cn/)

## 最简单的Express应用 

	// 创建工程和安装 express 模块
	mkdir node-test
	cd node-test
	npm init
	npm install express --save-dev

	// 创建 server.js 
	let express = require('express');
	let app = express();
	app.get('/', (req, res) => {
		res.send('Hello.');
	});
	app.listen(3000, () => {
		console.log('connected.');
	});

## Express应用生成器

	// 通过命令行安装脚手架
	npm install express-generator -g

	// 直接创建应用
	express [appname]

	// 进入[appname]应用安装依赖
	cd [appname]
	npm install

	// 打开应用
	set DEBUG=[appname] & npm start
	// 如果不需要debug直接用下面的命令启动
	npm start

## 