# 条件渲染  
直接使用`v-if`或者`v-show`指令即可

	<div v-if="bool">true</div>
	<div v-else>false</div>

	// 模板元素，可用v-if指令，不可用v-show指令
	<template v-if="bool"></template>

	<div v-show="bool">true</div>
	<div v-else>false</div>

	// 在组件中不能使用v-else，应该用下面这种方法
	<custom-component v-show="condition"></custom-component>
	<p v-show="!condition">这可能也是一个组件</p>

## v-if和v-show的区别  
在`v-if`和`v-show`里面，可能会有数据绑定和子组件，`v-if`在条件切换的时候会合适地销毁或重建里面的事件监听器和子组件，`v-show`只是简单的CSS变换。
因此，`v-if`适用于运行条件基本不改变的情况下，而`v-show`适用于频繁切换的情况下。