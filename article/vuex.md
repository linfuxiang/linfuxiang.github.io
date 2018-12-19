# Vuex  
> 一个`Vue`专属的状态管理工具。

简单来说，就是当我们的应用的多个组件需要依赖同一个状态，或者不同页面的视图需要改变同一状态时，为了更好地管理应用，就需要状态管理工具了。

它的基本思想：数据存储在`State`中，通过 `dispatch('Action')` （支持异步）或者直接 `commit('Mutation')` （仅支持同步）来改变State的状态，最后再渲染到视图中。

其实直接修改`State`的状态值也是可以成功的（非严格模式下），但还是推荐遵循[官方规则](https://vuex.vuejs.org/zh/guide/structure.html)，这么做的好处是，可以在Vue Devtools中跟踪到每一个状态的变化，或者使用它的时光机器的功能，因为只有`commit('Mutation')`会**同步**触发Vue Devtools的更新，这也是为什么要区分异步的`Action`和同步的`Mutation`。

Vuex使用`Vue.set`把状态与Vue实例关联起来，(待续...)

![vuex原理图](/dist/images/vuex/vuex.png)

简单示例：  

	// store.js
	import Vuex from 'vuex'

	Vue.use(Vuex)

	export default new Vuex.Store({
	    state: {
	        count: 0
	    },
	    mutations: {
	        increment(state) {
	            state.count++
	        }
	    },
	    actions: {

	    }
	})

	// main.js
	new Vue({
	    ...
	    store,
	    ...
	}).$mount('#app')

	// Index.vue
	<template>
	    <div class="app">
	        {{ count }}
	        <button @click="increment">increment</button>
	    </div>
	</template>
	<script>
	    export default {
	        ...
	        computed: {
	            count() {
	                return this.$store.state.count
	            }
	        },
	        methods: {
	        	increment() {
					this.$store.commit('increment')
        		},
	        }
	        ...
	    };
	</script>
	<style lang="scss">
	</style>

[Vuex文档](https://vuex.vuejs.org/zh/)
