## Mutation  
想要改变`State`的值，只能通过提交`mutation`，对此，官方提出规则：  

> 提交`mutation`是更改状态的唯一方法，并且这个过程是同步的。  

事实上，即使在`mutation`中执行了异步方法，而且异步方法中修改了状态，也是成功的。但是假如使用了[devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)，它是没办法追踪到异步方法中的状态变化，这也是`Vuex`的初衷。

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
这种风格更适合多人协作的项目中，方便管理和了解所有的`mutation`方法：

	import { SOME_MUTATION } from '....'
	// ...
	mutations: {
		[SOME_MUTATION](state) {
			// ...
		}
	}

同样地，也有`mapMutations`