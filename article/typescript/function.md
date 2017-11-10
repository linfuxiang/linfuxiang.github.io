# 函数
## 定义完整的函数类型

	let foo: (para: number) => number = 
	function(para: number): number {	// 此行的类型不是必须的，可省略
		return ++para;
	}

## 可选参数、默认参数 和剩余参数

#### 可选参数、默认参数 

	function foo1(p1: string, p2?: string) {
		console.log(p1 + p2);
	}
	function foo2(p1: string, p2 = 'bbb'): void {
		console.log(p1 + p2);
	}

	foo1('aaa');				// 'aaaundefined'
	foo1('aaa', undefined);		// 'aaaundefined'
	foo2('aaa');				// 'aaabbb'
	foo2('aaa', undefined);		// 'aaabbb'

上面的例子，**p2**这个参数在调用函数的时候都是可有可无的

在有默认参数时，传入**undefined**会使用默认值而不是**undefined**

#### 剩余参数

	function foo1(p1: string, ...restP: string[]) {
		console.log(p1 + restP.join(''));
	}