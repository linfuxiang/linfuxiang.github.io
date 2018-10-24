## Action  
用于异步操作和提交`mutation`。

	new Vuex.Store({
		state: {
			n: 0
		},
		mutations: {
			increment(state) {
				state.n += 1
			}
		},
		actions: {
			increment({ commit }) {
				// ...
				commit('increment')
			}
		},
	})

	store.dispatch('increment')

同样地，可以传参  

同样地，也有`mapActions`  

#### 链式异步操作  

 	actions: {
		actionA ({ commit }) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					commit('someMutation')
					resolve()
				}, 1000)
			})
		}
	}

	store.dispatch('actionA').then(() => {
		// ...
	})

还可以用`async/await`：

	actions: {
		async actionA ({ commit }) {
			// getData() 返回的是Promise
	    	commit('gotData', await getData())
		},
	}

	await store.dispatch('actionA')