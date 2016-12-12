# 事件处理器  
使用例子：

	<button v-on:click="foo"></button>
	<button @click="foo"></button>

可传参数

	<button @click="foo('param', $event)"></button>

## 事件修饰符
	@[eventName].stop 		//阻止事件冒泡
	@[eventName].prevent 	//阻止默认事件
	@[eventName].capture 	//使用事件捕获模式
	@[eventName].self 		//只当事件在该元素本身（而不是子元素）触发时触发回调