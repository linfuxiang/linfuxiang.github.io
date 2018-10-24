# Vue Router  
> 一个Vue专属的路由管理器。

实例  

	import Vue from 'vue'
	import VueRouter from 'vue-router'
	Vue.use(VueRouter)

	import index from './index.vue'

	const routes = [{
	    path: '/',
	    component: index
	}, {
	    path: '*',
	    redirect: '/',
	}]

	export default new VueRouter({
	    // mode: 'history',
	    routes,
	})

如果需要在组件中访问路由器，可通过`this.$route`访问

TODO：
动态路由匹配 path: '/index/:id', cmp: index
嵌套路由
	children: [{
        path: 'sub',
        name: 'sub',
        component: () =>
            import('@/views/sub.vue'),
    }, {
        path: 'sub2',
        name: 'sub2',
        component: () =>
            import('@/views/sub2.vue'),
    }, 

编程式导航
	router.push
		// 字符串
		router.push('home')

		// 对象
		router.push({ path: 'home' })

		// 命名的路由
		router.push({ name: 'user', params: { userId: 123 }})

		// 带查询参数，变成 /register?plan=private
		router.push({ path: 'register', query: { plan: 'private' }})

		onComplete 和 onAbort 只有路由地址改变才生效
	router.replace
	router.go

命名视图