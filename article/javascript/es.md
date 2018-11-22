## ES2015  
### Array  
1. Array.from()  
2. Array.of()  
3. copyWithin()
4. find(), findIndex()  
5. fill()  
6. entries(), keys(), values()  

### Set  

	Set.prototype.size

	add(value)
	delete(value)
	has(value)
	clear()

#### 遍历  

	keys()：返回键名的遍历器
	values()：返回键值的遍历器
	entries()：返回键值对的遍历器
	forEach()：使用回调函数遍历每个成员

### Map   

	let m1 = new Map()
	let m2 = new Map([
		['key1', 1],
		['key2', 2],
	])

属性：

	m2.size // 2

实例方法：  

	get()
	set()
	has()
	delete()
	clear()

### Proxy & Reflect  
#### Proxy  
	new Proxy(target, handler)

实例：

	let obj = {
		a: 1
	}
	let proxy = new Proxy(obj, {
		get(target, key, receiver) {
			// 拦截 proxy.a 或 proxy['a']
		},
		set(target, key, value, receiver) {
			// 拦截 proxy.a = 1 或 proxy['a'] = 1
		},
		has(target, key) {
			// 拦截 'a' in proxy
		},
		deleteProperty(target, key) {
			// 拦截 delete proxy.a
		},
		ownKeys(target) {
			// 拦截
			// Object.getOwnPropertyNames(proxy)
			// Object.getOwnPropertySymbols(proxy)
			// Object.keys(proxy)
			// for...in
		},
		getOwnPropertyDescriptor(target, key) {

		},
		defineProperty(target, key, propDesc) {
			// 拦截
			// Object.defineProperty()
			// Object.defineProperties()
		},
		preventExtensions(target) {

		},
		getPrototypeOf(target) {
			// 拦截 Object.getPrototypeOf(proxy)
		},
		isExtensible(target) {

		},
		setPrototypeOf(target, proto) {

		},
		apply(target, object, args) {

		},
		construct(target, args) {
			// 拦截 new proxy()
		}
	})

#### Reflect  
**Reflect** 的方法与 **Proxy** 是相同且对应的

#### Iterator  

	let iter = [1, 2, 3][Symbol.iterator]();
	iter.next(); // {value: 1, done: false}
	iter.next(); // {value: 2, done: false}
	iter.next(); // {value: 3, done: false}
	iter.next(); // {value: undefined, done: true}

## ES2016  
1. **Array.prototype.include**  
2. **\*\*运算符**  

## ES2017  
1. Object.values()  
2. Object.entries()  
3. ''.padStart() , ''.padEnd()  
4. Object.getOwnPropertyDescriptors()
5. Async/Await

## ES2018  
1. 共享内存和原子性（多线程），SharedArrayBuffer  
2. Promise.prototype.finally()
