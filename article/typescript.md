# TypeScript

## 上手  
安装`TypeScript`并进行简单编译，开发工具可使用`Sublime Text`并安装`TypeScript`插件或者使用`Visual Studio`。

	npm install -g typescript

在开发目录下创建`tsconfig.json`的配置文件
[详细配置看这里](https://www.tslang.cn/docs/handbook/tsconfig-json.html)

	{
	    "compilerOptions":{
	        "sourceMap": true,
	    },
	    "include": [
	        "**/*.ts",
	    ],
	    "exclude": [
	        "node_modules",
	    ]
	}

编写`*.ts`代码并在命令行中运行`tsc`命令，即可生成`js`文件以及`source-map`文件

## Webpack打包

> node v8.1.1  
  npm v5.0.3

先安装模块
	
	// 全局安装webpack
	npm i webpack -g

	// 在开发根目录下
	npm init
	npm i typescript ts-loader -D

同样需要创建`tsconfig.json`配置文件，再创建`webpack.config.js`的配置文件。

	module.exports = {
	    entry: "./src/index.ts",
	    output: {
	        filename: "bundle.js",
	        path: __dirname + "/dist"
	    },
	    devtool: "source-map",
	    resolve: {
	        extensions: [".ts", ".tsx", ".js"]
	    },
	    module: {
	        loaders: [
	            { 
	                test: /\.tsx?$/, 
	                loader: "ts-loader" 
	            }
	        ]
	    }
	};

运行下面的命令开启自动编译

	webpack -w