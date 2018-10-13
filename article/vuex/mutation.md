## Mutation  
想要改变**State**的值，只能通过提交**mutation**，而且其操作必须是同步的。

	new Vuex.Store({
		state: {
			n: 0
		},
		mutations: {
			increment(state) {
				state.n += 1
			}
		}
	})

	store.commit('increment')

	// 如果需要传参
	increment(state, args) {
		state.n += args.n
	}

	store.commit('increment', {
		n: 1	
	})

#### 使用常量代替方法名称  
这种风格更适合多人协作的项目中，方便管理和了解所有的**mutation**方法：

	import { SOME_MUTATION } from '....'
	// ...
	mutations: {
		[SOME_MUTATION](state) {
			// ...
		}
	}

同样地，也有**mapMutations**