## Getter  

	new Vuex.Store({
		state: {
			...
		},
		getters: {
			// 参数第一个为state，第二个为其他getter，第三个为根节点state，第四个为根节点getters
			someVars: (state, getter, rootState, rootGetters) => {
				return state....
			}
		}
	})

`Getter` 和 `State` 用法相似，也有 `mapGetters` 辅助函数，用法也一样（`Getter`会被缓存，在依赖值更新的时候会重新计算）  

还可以通过方法访问（不会缓存）：  

	getters: {
		getTodoById: (state) => (id) => {
			return state....
		}
	}

	store.getters.getTodoById(2)