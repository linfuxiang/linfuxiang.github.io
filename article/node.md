# Node.js 
安装：在[官网](https://nodejs.org/en/)寻找适合的版本安装。
## 在linux上安装 
解压

	tar -xvf node-v6.9.1-linux-x64.tar.xz

设置全局变量

	ln -s /root/node-v6.9.1-linux-x64/bin/node /usr/local/bin/node
	ln -s /root/node-v6.9.1-linux-x64/bin/npm /usr/local/bin/npm

## 创建一个最简单的http服务器

	let http = required('http');
	http.createServer((req, res) => {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write('Hello Node.');
		res.end();
	}).listen(3000);



