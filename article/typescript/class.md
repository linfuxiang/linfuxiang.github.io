# 类

TypeScript的类既可以创建构造函数也可以创建实例类型。

最简单的类

	class parentClass {
	    firstName: string
	    lastName: string
	    introduce(self: string = this.firstName) {
	        console.log(`我是${self}`)
	    }
	    constructor(firstName: string) {
	        this.firstName = firstName
	        this.lastName = '林'
	    }
	}

	let father = new parentClass('爸爸');

## 继承

	class childClass extends parentClass {
		introduce(self: string = this.firstName) {
	        super.introduce(self)
	    }
	    constructor(firstName: string) {
	        super(firstName)
	    }
	}

	let child = new childClass('哥哥');

子类想改变构造器里的属性需使用**super()**，还可以使用**super**访问父类方法

## 修饰符

在属性名前可加修饰符  
**public**（公共属性，默认）  
**private**（私有属性，只能在内部访问）  
**protected**（内部以及子类保护属性）  
**readonly**（只读属性，需在声明时或者构造函数中被初始化）  

	class _Class {
		public prop1: string	// 公共属性
		private prop2: string	// 私有属性

		protected prop3: string	// 可在子类中使用但不能在实例中使用

		readonly prop4: string	// 只读
	}

## get和set

使用**Object.defineProperty**进行编译，因此编译后的代码仅兼容`ES5`及更高版本

	class Boy {
		private __name: string
		get name(): string {
			return this.__name;
		}
		set name(val: string): void {
			this.__name = val;
		}
	}

## 静态属性

只能在类内部被访问，访问静态属性需要加上类名，如**Boy.**，而不是**this.**

	class Boy {
		static _name = 'lin'
		showName() {
			console.log(Boy._name);
		}
	}

## 抽象类

抽象类作为其它派生类的基类使用，而抽象方法必须在子类中实现

	abstract class parentClass {
	    _name: string
	    abstract foo(): void	// 必须在子类中实现
	}
	class childClass extends parentClass {
		foo() {
			// do sth...
		}
	}

## 使用类做接口

	class Point {
	    x: number;
	    y: number;
	}

	interface Point3d extends Point {
	    z: number;
	}

	let point3d: Point3d = {x: 1, y: 2, z: 3};