# 命名空间 
> 推荐使用模块代替命名空间

和**模块**的功能相似，**命名空间**相当于封装一部分代码，并把变量、函数等**export**给外部使用。

#### 单文件命名空间

	namespace Zoom {
		export function foo(): void {
			console.log('hello.')
		}
	}

	Zoom.foo();

#### 多文件命名空间  

`zoom.ts`

	namespace Zoom {
		export function foo(): void {
			console.log('hello.')
		}
	}

`index.ts`

	/// <reference path="zoom.ts" />
	Zoom.foo();

使用tsc命令打包输出文件,

	tsc --outFile index.js index.ts