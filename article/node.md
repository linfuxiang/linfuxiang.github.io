# Node.js 
安装：在[官网](https://nodejs.org/en/)寻找适合的版本安装。  
## 创建一个最简单的http服务器

	let http = required('http');
	http.createServer((req, res) => {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write('Hello Node.');
		res.end();
	}).listen(3000);



