# 数据绑定
这部分除了[过滤器](http://cn.vuejs.org/guide/custom-filter.html)和[指令](http://cn.vuejs.org/guide/custom-directive.html)，还是相对比较简单。
## 插值
"Mustache"语法（双大括号）

	<p> {{ message }} </p>  

如果不想在数据变化的时候改变插值  

	<p> {{ * message }} </p>  

如果想要输出HTML字符串，则需要三"Mustache"标签

	<div> {{{ html }}} </div>

**在Vue的指令和特殊特性内不能用插值！**
## 绑定表达式
在数据绑定时可以进行使用表达式

	{{ ok ? 'true' : 'false' }}

也可以使用过滤器

	{{ message | [filterName] }}
	{{ message | [filterName] | [anotherFilter] }}
	{{ message | [filterName] 'arg1' 'arg2' }}	//表达式值为第一个参数，arg1为第二个参数...

详细参考[过滤器](http://cn.vuejs.org/guide/custom-filter.html)
## 指令
>指令 (Directives) 是特殊的带有前缀 `v-` 的特性。指令的值限定为绑定表达式，因此上面提到的 JavaScript 表达式及过滤器规则在这里也适用。指令的职责就是当其表达式的值改变时把某些特殊的行为应用到 DOM 上。  

#### 参数
	
	<a v-bind:href="url"></a>
	<a href="{{ url }}"></a>	//同样的效果

	<button v-on:click="doSth"></button>

上面的两个例子中的href和click就是指令的参数，用`:`连接指令和参数

#### 修饰符
以`.`开始的特殊后缀，表示指令以特殊的方式绑定。

	<a v-bind:href.literal="/a/b/c"></a>	//表示只把值解析为一个字符串


详细参考[自定义指令](http://cn.vuejs.org/guide/custom-directive.html)

## 缩写
有两个常用的缩写
#### `v-bind`

	//v-bind:href="url" => :href="url"

#### `v-on`

	//v-on:click="doSth" => @click="doSth"