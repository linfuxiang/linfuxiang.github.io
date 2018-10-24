# Vuex  
> 一个`Vue`专属的状态管理工具。

简单来说，就是当我们的应用的多个组件需要依赖同一个状态，或者不同页面的视图需要改变同一状态时，为了更好地管理应用，就需要状态管理工具了。  
它的基本思想：数据存储在State中，通过 `dispatch('Action')` （支持异步）或者直接 `commit('Mutation')` （仅支持同步）来改变State的状态，最后再渲染到视图中。

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
