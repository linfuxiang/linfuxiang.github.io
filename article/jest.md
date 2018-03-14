# Jest

> [安装及入门参考文档](https://facebook.github.io/jest/docs/en/getting-started.html)  
> [Testing Vue with Jest](https://alexjoverm.github.io/series/Unit-Testing-Vue-js-Components-with-the-Official-Vue-Testing-Tools-and-Jest/)

## Matchers匹配器

`.toBe()`  
`.toEqual()` 一般用来检测数组、对象是否一致  
`.not` 反向规则

#### Truthiness
`toBeNull()`  
`toBeUndefined()`  
`toBeDefined()`  
`toBeTruthy()`  
`toBeFalsy()`  

#### Numbers
`toBeGreaterThan()`  
`toBeGreaterThanOrEqual()`  
`toBeLessThan()`  
`toBeLessThanOrEqual()`  
`toBeCloseTo()` 可用于忽略浮点数计算产生的细微的差异

#### Strings
`toMatch()` 可使用正则

#### Arrays
`toContain()` 

#### Exceptions
`toThrow()`

## Setup & Teardown

#### beforeEach和afterEach  
在执行测试前后需要进行某些操作，可以使用`beforeEach`和`afterEach`

	beforeEach(() => {
	  	installSth();
	});

	afterEach(() => {
	  	uninstallSth();
	});

#### beforeAll和afterAll  
一次性安装，只会执行一次

上面四个方法都可以有独立的作用域，放在`describe`块中则能独立安装卸载