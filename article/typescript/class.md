# 类

TypeScript的类的使用和ES6大同小异

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

## 公共属性和私有属性

在属性前加上**public**（公共，默认）或者**private**（私有，只能在内部访问）