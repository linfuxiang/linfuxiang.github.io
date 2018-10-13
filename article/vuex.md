# Vuex  
> 一个**Vue**专属的状态管理工具。

[Vuex文档](https://vuex.vuejs.org/zh/)

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

