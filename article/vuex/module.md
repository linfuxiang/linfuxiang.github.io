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

**state**本来就是分成模块的，通过**rootState.moduleName.name**访问  
**getters**在局部化的情况下通过**rootGetters[moduleName/name]**访问  
**mutations**在局部化的情况下通过**commit('moduleName/someMutation', null, { root: true })**调用  
**actions**在局部化的情况下通过**dispatch('moduleName/someAction', null, { root: true })**调用  