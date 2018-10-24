## State  
`mapState`辅助函数使用方法：  

	import { mapState } from 'vuex'
	
	computed: mapState({
		// 箭头函数可使代码更简练
		count: state => state.count,

		// 传字符串参数 'count' 等同于 `state => state.count`
		countAlias: 'count',

		// 为了能够使用 `this` 获取局部状态，必须使用常规函数
		countPlusLocalState (state) {
			return state.count + this.localCount
		}
	})

字段名称相同时，可以使用数组：

	computed: mapState([
		// 映射 this.count 为 store.state.count
		'count'
	])

如果需要和组件的计算属性混用：  

	computed: {
		localComputed () {},
		...mapState({
			// ...
		})
	}