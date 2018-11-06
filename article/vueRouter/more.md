# 进阶  

### 导航守卫  
#### 全局守卫  
`router.beforeEach`

	const router = new VueRouter({ ... })

	router.beforeEach((to, from, next) => {
		// ...
	})

`router.beforeResolve`

	router.beforeResolve((to, from, next) => {
		// ...
	})

`router.afterEach`

	router.afterEach((to, from) => {})

#### 路由独享守卫  
`beforeEnter`

	const router = new VueRouter({
		routes: [
			{
				path: '/foo',
				component: Foo,
				beforeEnter: (to, from, next) => {
					// ...
				}
			}
		]
	})

#### 组件内守卫  

	beforeRouteEnter (to, from, next) {
		// 在渲染该组件的对应路由被 confirm 前调用
		// 不！能！获取组件实例 `this`
		// 因为当守卫执行前，组件实例还没被创建
		next(vm => {
		    // 通过 `vm` 访问组件实例
		})
	},

只改变参数`/index/:id`或查询`?query=1`，需要使用`beforeRouteUpdate`

	beforeRouteUpdate (to, from, next) {
		// 在当前路由改变，但是该组件被复用时调用
		// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
		// 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
		// 可以访问组件实例 `this`
  		next()
	},


	beforeRouteLeave (to, from, next) {
		// 导航离开该组件的对应路由时调用
		// 可以访问组件实例 `this`
		next()
	}

#### 流程  

1. 导航开始（改变）
2. 触发失活组件里的`beforeRouteLeave`**组件不重用时**
3. 触发全局的`beforeEach`
4. 触发`beforeRouteUpdate`(2.2+)**组件重用时**
4. 触发路由配置的`beforeEnter`**组件不重用时**
6. 解析组件
7. 在被激活的组件里触发`beforeRouteEnter`**组件不重用时**
8. 触发全局的`beforeResolve`(2.5+)
9. 导航被确认
10. 触发全局的`afterEach`
11. 开始组件实例的生命周期，DOM更新
12. 如果传给`beforeRouteEnter`的next有回调函数，则调用

### 滚动行为  

	const router = new VueRouter({
		routes: [...],
		scrollBehavior (to, from, savedPosition) {
			if (savedPosition) {
				return savedPosition
			} else {
				// 滚动到绝对定位
				return { x: 0, y: 0 }
				// 滚动到锚点
				return { selector: to.hash }
			}
		}
	})

`return`返回的信息：  

- `{ x: number, y: number }`  
- `{ selector: string, offset? : { x: number, y: number }} (offset 只在 2.6.0+ 支持)`  

`savedPosition`模拟返回

#### 异步滚动  
在一些需要用到过渡组件的场景下，或者有异步数据调用的场景下，滚动行为在过渡完成前就触发了，这时候可以使用异步滚动：

	scrollBehavior (to, from, savedPosition) {
		return new Promise((resolve, reject) => {
	        setTimeout(() => {
	            resolve({ x: 0, y: 100 })
	        }, 2000)
	    })
	}

### 路由懒加载  

	{
		path: 'list',
		name: 'list',
		component: () => import('@/list.vue'),
	}

如果需要分块

	// ...
	component: () => import(/* webpackChunkName: "group-list" */ '@/list.vue'),