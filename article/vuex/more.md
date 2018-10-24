### 严格模式  
严格模式下，不是由`mutation`引起的状态变更都会抛出错误（最好只在开发环境使用）

	new Vuex.Store({
		strict: true		
	})

### 表单处理  
因为Vuex只能通过`mutation`修改状态，所以不能在表单上直接使用`v-model`，只能通过绑定value和监听事件处理。  
或者通过以下的方式：

	<input type="text" v-model="name">

	computed: {
		name: {
			get() {
				return ...
			},
			set(val) {
				this.$store.commit('...', val)
			}
		}
	}

### store实例方法  
#### subscribe  
订阅mutation，在mutation完成之后调用回调方法  

	store.subscribe((mutation, state) => {
		// ...
	})

如果要注销订阅，调用这个方法的返回函数即可。

#### subscribeAction  
订阅action

	store.subscribeAction((mutation, state) => {
		// ...
	})

如果要注销订阅，调用这个方法的返回函数即可。


#### watch  
为状态添加监听器

	store.watch(
	    (state) => state.moduleA.name,
	    (newV, oldV) => {

	    }
	)

如果要注销订阅，调用这个方法的返回函数即可。

#### 热重载  
TODO