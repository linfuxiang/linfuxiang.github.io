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

