# Class 和 Style  
## 绑定Class
#### 对象语法  
	
	<div v-bind:class="{ 'class-a': isA }"></div>

	data: {
		isA: true
	}
	// 推荐直接绑定对象

也可以绑定一个返回对象的计算属性computed。

#### 数组语法

	<div v-bind:class="[a, b]"></div>

	data: {
		a: 'cssa',
		b: 'cssb'
	}

## 绑定Style
#### 对象语法
	
	<div v-bind:style="{ color: colorName }"></div>

	data: {
		colorName: 'red'
	}
	// 同样推荐直接绑定对象

也可以绑定一个返回对象的计算属性computed。

#### 数组语法

	<div v-bind:style="[a, b]"></div>

	data: {
		a: {'color':'red'},
		b: {'font-size':'20px'}
	}

**不用担心前缀问题，Vue.js会自动帮忙加上前缀**

> 尽管可以用 Mustache 标签绑定 class，比如 *class="{{ className }}"*，但是我们不推荐这种写法和 *v-bind:class* 混用。两者只能选其一！