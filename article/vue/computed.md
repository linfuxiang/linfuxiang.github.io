# 计算属性  
一般来说，我们把绑定表达式限制为一个表达式，因为在模板中放入太多逻辑会让模板过重且难以维护。如果表达式逻辑多于一个，应使用**计算属性**。

## computed  
	
	// 省略实例化Vue的过程
	<div>
		{{ a }} + {{ b }} = {{ c }}
	</div>

	new Vue({
		data: {
			a: 1,
			b: 2
		},
		computed: {
			// 一个计算属性的 getter，多个逻辑应该放在这里面，c的值会随着a和b的变化而变化
			c: function(){
				// this指向vue实例
				return this.a + this.b;
			}
		}	
	});

## .$watch  

	vm.$watch('a', function(val){
		this.c = val + this.b;
	});
	vm.$watch('b', function(val){
		this.c = val + this.a;
	});

命令式的`.$watch`与计算属性相比，推荐使用计算属性，因为它比较简洁。

## computed  
计算属性默认只是 getter，不过在需要时你也可以提供一个 setter，在属性被改变时，对应进行一些操作。

	computed: {
		fullName: {
			// getter
			get: function () {
				return this.firstName + ' ' + this.lastName
			},
			// setter
			set: function (newValue) {
				var names = newValue.split(' ')
				this.firstName = names[0]
				this.lastName = names[names.length - 1]
			}
		}
	}

关于计算属性背后的原理和技术细节详见[计算属性的奥秘](http://cn.vuejs.org/guide/reactivity.html#计算属性的奥秘)。