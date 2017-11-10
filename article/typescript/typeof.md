# 基础类型

声明变量时，为变量定下类型

	let isOk: boolean = false;	// 布尔类型

类型还有：

1. **number**： 数值
2. **string**： 字符串
3. **number[]**或者**Array&lt;number&gt;**： 数组，`number`代表数组元素的类型
4. 元组类型  

		let arr: [number, string] = [1, 'tuple'];	

5. **any**： 任意类型
6. **void**： 空类型，一般为函数的返回值  
	
		function foo(): void {}

7. **undefined** 和 **null**： 任何其他类型的子类型
8. **never**： 不存在的值的类型，比如函数无法结束  

		function infiniteLoop(): never {
	    	while (true) {}
		}

9. **enum**： 枚举类型

		enum Color {Red = 1, Green, Blue}
		let c: Color = Color.Green;

[详细笔记](/htmls/article.html?typescript-enum)

### 类型断言  
相当于C语言里的强制类型转换

	<string>someValue
	// 或者
	someValue as string
