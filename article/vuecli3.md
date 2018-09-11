# Vue CLI 3  
**Vue CLI 3**，是一个快速开发`Vue.js`项目的工具。  
相对于旧版**Vue Cli**，它  
1. 支持选择配置项目，并记录**preset**作为用户习惯  
2. 通过独立的配置文件**vue.config.js**修改项目配置  
3. 以**cli-service**为基础的插件系统，通过插件运行服务  
4. 支持UI图形化界面管理项目  
5. 支持对**.vue**文件快速原型开发  
6. 支持打包成ES2015现代代码，缩减体积和提高代码运行速度

## 初始化
> 环境要求：Node8.9+  
1. 如果已经全局安装旧版**Vue CLI**，先`npm uninstall vue-cli -g`卸载了  
2. `npm install @vue/cli -g`安装**Vue CLI 3**  
[安装说明](https://cli.vuejs.org/zh/guide/installation.html)

	npm install @vue/cli -g
	vue create demo
	[选择需要的模块和工具]
	npm run serve | npm run build

## UI图形化管理界面  
	vue ui

## 预览生成的Webpack配置文件
	vue inspect
	vue inspect > output.js
	vue inspect [指定的属性]
	vue inspect --rule [rule名称]
	vue inspect --plugin [plugin名称]

## **踩坑** 
1. 多页面应用使用`pages`进行配置，只支持文档上的`entry`，`template`，`filename`，`title`和`chunks`属性，其他属性例如`chunksSortMode`只能通过`chainWebpack`方法进行添加，而且每个页面的`html-plugin`名称是不一样的，细节可通过`vue inspect`命令查看。**(cli-service版本3.0.1)**
2. `chainWebpack`方法，如果不知道怎么定位到自己想要的配置，要不查看源码，要不`vue inspect`。

[文档](https://cli.vuejs.org/zh/)