## Module  
[官方文档](https://vuex.vuejs.org/zh/guide/modules.html)  
当项目较大时，可以把不同的状态管理分割成module：

	const moduleA = {
		state: { ... },
		mutations: { ... },
		actions: { ... },
		getters: { ... }
	}

	const moduleB = {
		state: { ... },
		mutations: { ... },
		actions: { ... }
	}

	const store = new Vuex.Store({
		modules: {
			moduleA,
			moduleB
		}
	})

	// moduleA的状态
	store.state.moduleA

#### 命名空间namespaced  
[官方文档](https://vuex.vuejs.org/zh/guide/modules.html#%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4)

	moduleA = {
		namespaced: true,

		state: { ... },
		mutations: { ... },
		actions: { ... },
		getters: { ... }
	}

`state`本来就是分成模块的，通过`rootState.moduleName.name`访问  
`getters`在局部化的情况下通过`rootGetters[moduleName/name]`访问  
`mutations`在局部化的情况下通过`commit('moduleName/someMutation', null, { root: true })`调用  
`actions`在局部化的情况下通过`dispatch('moduleName/someAction', null, { root: true })`调用  

#### 带命名空间的绑定函数  

	computed: {
		...mapState('moduleA', {
			a: state => state.a,
			b: state => state.b
		})
	},
	methods: {
		...mapActions('moduleA', [
			'foo', // -> this.foo()
			'bar' // -> this.bar()
		])
	}

还可以通过`createNamespacedHelpers`来创建某个模块的绑定函数

	import { createNamespacedHelpers } from 'vuex'
	const { mapState, ... } = createNamespacedHelpers('moduleA')

#### 在带有命名空间的模块中注册全局action  

	actions: {
		someAction: {
			root: true,
			handler (namespacedContext, payload) { ... } // -> 'someAction'
		}
	}