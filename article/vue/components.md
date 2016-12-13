# 组件components 
## 什么是组件 

>组件（Component）是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码。在较高层面上，组件是自定义元素， Vue.js 的编译器为它添加特殊功能。在有些情况下，组件也可以是原生 HTML 元素的形式，以 is 特性扩展。

## 注册组件  

全局注册：

	Vue.component('my-component', {
		// options
	});

局部注册：

	var cpn = {
		template: '<div></div>'
	};
	var vm = new Vue({
		// ...
		components: {
			'my-component': cpn
		}
	});