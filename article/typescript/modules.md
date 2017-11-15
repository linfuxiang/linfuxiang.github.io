# 模块

可以使用**export**关键字来导出所有声明，包括变量、函数、类、接口等。
	
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