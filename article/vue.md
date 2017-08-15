# Vue.js 1.*
> Vue是一个构建数据驱动的web界面的库。其目标是通过尽可能简单的API实现响应的数据绑定和组合的视图组件。  

#### Vue不像Angular，它不是一个全能的框架，因此它非常容易学习，同时也非常容易与其它库整合或加入到项目之中。

![Alt text](/dist/images/vue/mvvm.png)

#### 上图为Vue的MVVM思想，只要我们创建了绑定，DOM就会和数据保持同步，每当修改了数据，DOM就会更新。因此我们只需要直接修改数据，从而使我们的代码更加容易撰写、理解和维护。

	<!-- View -->
	<div id="myVue">
		Hello {{a}}
	</div>  

	<script>
		// Model
		var myData = {
			a: 'world'
		};

		// Vue实例，即是ViewModel
		var vm = new Vue({
			el: '#myVue',
			data: myData
		});
	</script>
	
## 属性和方法  
#### 每个Vue实例都会代理data对象里的所有属性，即原始数据和Vue实例属性的改变会互相影响。但是，只有这些被代理的属性是响应的，如果在实例创建之后添加新的属性到实例中，它不会触发视图更新。

	vm.a === myData.a //true

	vm.a = 'WORLD'
	data.a //'WORLD'

	data.a = 'world'
	vm.a //'world'
	
#### Vue实例暴露了一些带有前缀`$`的属性和方法,例如

	vm.$data === myData	//true
	vm.$el === document.getElementById('myVue')	//true

	vm.$watch('a', function(newVal, oldVal){
		//在vm.a改变后回调
	})

## 生命周期  
#### created => beforeCompile => compiled => ready => beforeDestroy => destroyed
![Alt text](/dist/images/vue/lifecycle.png)