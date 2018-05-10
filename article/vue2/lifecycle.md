# 生命周期

## Vue常用的生命周期：  
+ beforeCreate  
+ created  
+ beforeMount  
+ mounted  
+ beforeUpdate  
+ updated  
+ beforeDestroy  
+ destroyed  

## 创建一个Vue实例：  

	let vm = new Vue({
	    el: '#app',
	    data() {
	      	return {
	      		message: 'Vue的生命周期',
	      	}
    	},
  	})

## Vue初始化

1. `new Vue()`被调用  
**beforeCreate**  
2. 初始化事件，对数据进行监测  
**created**  
3. 检测`render`或`template`或`el`属性，并对其进行编译（存在着优先级，render->template->外部HTML模版）  
**beforeMount**  
4. 替换编译好的el  
**mounted**  

实例：  

	beforeCreate() {
        console.log('------beforeCreate------');
        console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
        console.log("%c%s", "color:red", "data   : " + this.$data); //undefined 
        console.log("%c%s", "color:red", "message: " + this.message)
    },
    created() {
        console.log('------created------');
        console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
        console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化 
        console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
    },
    beforeMount() {
        console.log('------beforeMount------');
        console.log("%c%s", "color:red", "el     : " + (this.$el)); //已被初始化
        console.log(this.$el);
        console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化  
        console.log("%c%s", "color:red", "message: " + this.message); //已被初始化  
    },
    mounted() {
        console.log('------mounted------');
        console.log("%c%s", "color:red", "el     : " + this.$el); //已被初始化
        console.log(this.$el);
        console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
        console.log("%c%s", "color:red", "message: " + this.message); //已被初始化 
    },

![图1](/dist/images/vue/res1.jpg)

## 数据更新

1. 数据被更新，但页面未被渲染  
**beforeUpdate**  
2. 使用Virtual DOM进行页面的局部渲染  
**updated**  

实例：

	beforeUpdate() {
        console.log('------beforeUpdate------');
        console.log("%c%s", "color:red", "DOM内容 : " + document.querySelector('#app').innerText);
        console.log(this.$el);
        console.log("%c%s", "color:red", "message : " + this.message);
    },
    updated() {
        console.log('------updated------');
        console.log("%c%s", "color:red", "DOM内容 : " + document.querySelector('#app').innerText);
        console.log(this.$el);
        console.log("%c%s", "color:red", "message : " + this.message);
    },

![图1](/dist/images/vue/res2.jpg)

## 销毁Vue

1. `vm.$destroy()`被调用  
**beforeDestroy**  
2. 卸载所有Vue绑定的所有数据和事件监听器，还有子组件  
**destroyed**  

## 组件相关

1. `keep-alive`的组件被激活  
**activated**  
2. `keep-alive`的组件被停用  
**deactivated**  

## 错误抓获

1. 子孙组件发生错误时  
**errorCaptured**   

类型：`(err: Error, vm: Component, info: string) => ?boolean`


>当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 **false** 以阻止该错误继续向上传播。

![生命周期](/dist/images/vue/lifecycle2.png)