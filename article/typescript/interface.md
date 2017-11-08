# 接口  
## 定义接口

	interface valueInter {
		value1: string;		// 分号或者逗号分隔，甚至不写都可以
		value2?: number;	// 在属性名字后加问号，代表此属性是可选的
		readonly value3: number;	// 在属性名字前加readonly，代表此属性是只读的，不可修改
	}

## 接口定义外的属性  
一般情况下在使用接口定义变量时，不允许添加接口定义以外的属性，除非使用 **类型断言** 或者 **字符串索引签名**

	// 类型断言
	let newObj: valueInter = {
		value1: 'aaa',
		value3: 1,
		value4: 5,
	} as valueInter

	// 字符串索引签名
	interface valueInter {
	    [propName: string]: any;
	}