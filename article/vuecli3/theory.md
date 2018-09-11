# How does it work  

**Vue CLI 3**和旧版的一个很大的区别是，其实它本身什么都不做，只是提供一个平台，集中处理配置、插件等，它的**serve服务** 、**build打包**其实也是依赖插件来做的。  

举个例子，当我们命令行执行`npm run serve`或者`vue-cli-service serve`时，把目光转移到目录`node_modules/@vue/cli-service`，执行`/bin/vue-cli-service.js`，它引入核心处理代码`/lib/Service`，它主要做的事情是：  
1. 初始化环境，接收命令行参数  
2. 解析**package.json**  
3. 加载、注册所有**Plugins**（包括自带的插件、**package.json** 的 **vuePlugins**属性 、**devDependencies** 、**dependencies**）  
4. 合并生成**Webpack**配置（根据**vue.config.js** 和 **package.json** 的**vue**属性）  
5. 根据参数执行对应的**Plugin**  
*可以参考这个[流程图](https://www.processon.com/diagraming/5b925836e4b075b9fe3c8d5b)*  
  
![目录结构](/dist/images/vuecli3/folder.png)  