# 枚举

使用**enum**来定义枚举

	enum FileAccess {
	    // constant members
	    None,
	    Read = 1 + 1,
	    Write = 1 << 2,
	    ReadWrite = Read | Write,
	    // computed member
	    G = "123".length
	}

如无定义，第一个成员为**0**，后面的为上一个成员的值加**1**，可使用表达式

	enum Enum {
	    A
	}
	let a = Enum.A;

	// 👇编译出来的代码

	var Enum;
	(function (Enum) {
	    Enum[Enum["A"] = 0] = A";
	})(Enum || (Enum = {}));
	var a = Enum.A;

为了避免生成多余的代码和间接引用，可使用**常数枚举**

	const enum Enum {
	    A
	}
	let a = Enum.A;

	// 👇编译出来的代码

	var a = 0 /* A */;

#### 外部枚举（？）

	declare enum Enum {
	    A,
	}
	let a = Enum.A;

	// 👇编译出来的代码

	var a = Enum.A;
