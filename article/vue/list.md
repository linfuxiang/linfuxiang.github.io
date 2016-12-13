# 列表渲染  
## v-for  

	<li v-for="(index, item) in items">
		{{ index }} {{ item.message }}
	</li>

	<li v-for="item in items">
		{{ $index }} {{ item.message }}
	</li>

上面第二种方法可以直接使用`$index`代表当前数组元素的索引  
也可以用`of`分割符

	<li v-for="item of items">
		{{ item.message }}
	</li>

## template v-for  
可以用`<template>`配合`v-for`同时渲染多个元素块 

	<template v-for="item in items">
		<div></div>
		<p></p>
	</template>

## 注意！
因为 JavaScript 的限制，Vue.js 不能检测到下面数组变化：  
1. 直接用索引设置元素，如`vm.items[0] = {}`  
2. 修改数据的长度，如`vm.items.length = 0`  
为了解决问题1，Vue.js 扩展了观察数组，为它添加了一个 $set() 方法：

	// 与 `example1.items[0] = ...` 相同，但是能触发视图更新
	example1.items.$set(0, { childMsg: 'Changed!'})

至于问题2，只需用一个空数组替换 items。

除了 $set()， Vue.js 也为观察数组添加了 $remove() 方法，用于从目标数组中查找并删除元素，在内部它调用 splice() 。因此只用这样：

	this.items.$remove(item)