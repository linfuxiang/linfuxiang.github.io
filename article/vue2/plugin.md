# 插件  
### 开发  
	MyPlugin.install = function (Vue, options) {
		// 1. 添加全局方法或属性
		Vue.myGlobalMethod = function () {

		}

		// 2. 添加全局资源
		Vue.directive('my-directive', {
		
		})

		// 3. 注入组件
		Vue.mixin({
			
		})

		// 4. 添加实例方法
		Vue.prototype.$myMethod = function (methodOptions) {
			
		}

		// 5. 添加组件
		Vue.component('my-component', {
			
		})
	}

### 使用  

	Vue.use(MyPlugin)

	Vue.use(MyPlugin, {
		option1: 1
	})
