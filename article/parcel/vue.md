# Vue单文件组件
**Parcel**可以支持编译**.vue**文件组件

### Start  
需要先安装**babel-preset-env**，不然会报错。

	npm i vue parcel-plugin-vue vue-template-compiler -D

**index.html**

	<!DOCTYPE html>
	<html>

	<body>
		<div id="app"></div>
	    <script src="./index.js"></script>
	</body>

	</html>

**app.vue**

	<template>
	    <div>
	        <h1>{{ name }}</h1>
	    </div>
	</template>

	<script>
	    export default {
	        data() {
	            return {
	                name: 'LFXxxxx',
	            }
	        },
	    }
	</script>

	<style lang="scss" scoped>
	    h1 {
	    	color: red;
	    }
	</style>

**index.js**

	import Vue from 'vue/dist/vue.js'
	import App from './app.vue'

	new Vue({
	    el: '#app',
	    render: h => h(App)
	})