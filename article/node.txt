# Node.js 
安装：在[官网](https://nodejs.org/en/)寻找适合的版本安装。  
## 创建一个最简单的http服务器

	let http = required('http');
	http.createServer((req, res) => {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write('Hello Node.');
		res.end();
	}).listen(3000);

## 最简单的express应用 

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



