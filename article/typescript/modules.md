# 模块

## 导出  
可以使用**export**关键字来导出所有声明，包括变量、函数、类、接口等。
	
	// module1.ts
	export const iAmNum = 1;
	export function iAmFunc() {
		// ...
	}
	export class iAmClass {
		constructor() {}
	}
	export interface iAmInterface {
	    
	}

重命名

	export {
		iAmNum as anotherName
	}

## 导入  
使用**import**导入其他模块导出的内容。

	// 导入变量iAmNum
	import { iAmNum } from './module1'

	// 重命名导入的内容
	import { iAmNum as zzz } from './module1'

	// 导入全部
	import * as module1 from './module1'

## 默认导出导入  

	export default function() {
		// ...
	}

	import module1Func from './module1'
	module1Func();

## 在Typescript中引入jQuery

> typescript v2.x  

安装模块

	npm install jquery --save
	npm install @types/jquery --save
	// @types/jquery version:^3.2.16
    // jquery version:^3.2.1

在代码中使用**jQuery**

	import * as $ from 'jquery'

也可为`tsconfig.json`配置得更具体些：[详细说明](https://www.tslang.cn/docs/handbook/tsconfig-json.html#types-typeroots-and-types)