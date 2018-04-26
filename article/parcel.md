# Parcel
> 快速打包工具

### Start  
新建项目目录，并安装Parcel

	mkdir parcel-test
	cd parcel-test
	npm init
	npm i parcel-bundler -D

**index.html**

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<div>Hello Parcel!</div>
		<script src="./index.js"></script>
	</body>
	</html>

**index.js**

	import './index.css'
	console.log(Hello Parcel!)

**index.css**

	div {
		color: red;
	}

命令行运行**parcel index.html --open**，就是这么简单。  
(如果只是监听而不需要启动Parcel的服务器，可以运行**parcel watch index.html**)

![image](/dist/images/parcel/hello.jpg)

[官方文档](https://parceljs.org/)  
[文章: 关于 Parcel 你所需知道的一切：超快的Web应用打包器](http://www.css88.com/archives/9187)  
[实例](https://github.com/linfuxiang/parcel-test)  