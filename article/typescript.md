# TypeScript

## 上手  
安装`TypeScript`并进行简单编译，开发工具可使用`Sublime Text`并安装`TypeScript`插件或者使用`Visual Studio`。

	npm install -g typescript

在开发目录下创建`tsconfig.json`的配置文件

	{
	    "compilerOptions":{
	        "sourceMap": true,
	    },
	    "include": [
	        "**/*",
	    ],
	    "exclude": [
	        "node_modules",
	    ]
	}

编写`*.ts`代码并在命令行中运行`tsc`命令，即可生成`js`文件以及`source-map`文件