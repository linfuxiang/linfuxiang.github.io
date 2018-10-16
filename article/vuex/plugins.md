## 插件  
插件就是一个函数，store是唯一参数：  

	const myPlugin = store => {
		// ...
	}

	new Vuex.Store({
		plugins: [myPlugin]
	})

