# 接口  
## 定义简单的接口

	interface valueInter {
		value1: string;		// 分号或者逗号分隔，甚至不写都可以
		value2?: number;	// 在属性名字后加问号，代表此属性是可选的
		readonly value3: number;	// 在属性名字前加readonly，代表此属性是只读的，不可修改
	}

#### 接口定义外的属性  
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

## 定义函数的接口  

	interface Func {
  		(para: number): boolean;
	}

	let foo: Func = function(para: number) {
  		return true;
	}

其中，函数参数名不需要和接口定义的一样，即函数参数`para`可写成其他名字，但类型和返回值的类型必须一致。

## 定义数组的接口  

	interface StringArray {
		[index: number]: string;
	}

	let newArr: StringArray = ['a', 'b'];

上面的代码定义了一个字符串数组的接口，其索引是数值类型（也可设置为字符串类型）。

## 定义类的接口

	interface Classes {
		student: string;
		eat(food: string);
	}

	class class1 implements Classes {
	    student: string
	    eat(food: string) {}
	    constructor(no: number) {}
	}

	let newClass = new class1(1);

待续...

## 继承接口

	interface Figure {
	   height : number;
	}

	interface Hair {
	    hairLength: number;
	}

	interface Girl extends Figure, Hair {
	    name: string;
	}

	let meimei = <Girl> {};;
	meimei.height = 160;
	meimei.hairLength = 20;
	meimei.name = 'wife';

## 混合类型（学习中）

	interface Counter {
	    (start: number): string;
	    interval: number;
	    reset(): void;
	}

	function getCounter(): Counter {
	    let counter = <Counter>function (start: number) { };
	    counter.interval = 123;
	    counter.reset = function () { };
	    return counter;
	}

	let c = getCounter();
	c(10);
	c.reset();
	c.interval = 5.0;