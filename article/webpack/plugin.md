## Plugin  
> 适用于 Webpack4.x   

一个基础的插件：

    class testPlugin {
        apply(compiler) {
            compiler.hooks.emit.tap('testPlugin', compilation => {
                // 输出生产文件
                compilation.hooks.buildModule.tap('testPlugin', () => {
                    // 模块构建前...
                })
            })
            // 支持`tapAsync`和`tapPromise`和`async/await`
            // 需要增加callback参数并在完成调用这个回调函数
        })
    }

    module.exports = testPlugin

### compiler  
`compiler`可以理解为Webpack实例，是全局唯一的，包含了 Webpack 所有的配置信息，包含`options`，`loaders`，`plugins`等等信息，而`compiler.hooks`则为编译器钩子，可监听编译开始、编译完成、输出资源等。  

*一些钩子[参考文档](https://webpack.docschina.org/api/compiler-hooks/)：*  

- *`beforeCompile`*： 创建编译参数后，参数：`compilationParams`   
- *`compile`*： 在创建新编译之前，参数：`compilationParams`   
- *`compilation`*： 在创建编译之后   
- *`afterCompile`*： 编译完成之后   
- *`emit`*： 在发送资产到输出目录之前  
- *`afterEmit`*： 资产保存到输出目录后   
- *`done`*： 编译已完成，参数：`status`   

### compilation  
`compilation`包含了当前构建的模块的信息，`compilation.hooks`为编译钩子，可监听各模块的构建。

以下示例直接修改某个资源的输出：  

    let str = 'xxx'
    compilation.assets['fileName...'] = {
        source() {
            return str
        },
        size() {
            return str.length
        }
    }

### 一些主要的内容  
- *`compilation.modules`*： 当前编译中的所有模块
    - *`module.buildInfo.fileDependencies`*： 模块中的源文件路径数组，包含了样式表、图像等
- *`compilation.chunks`*： 当前编译中的输出
    - *`chunk._modules`*： 和`compilation.modules`相同，也可通过`for(const module of chunk.modulesIterable)`访问
    - *`chunk.files`*： 生成的文件名数组，可以从`compilation.assets`对象中访问

[官方教程](https://webpack.js.org/contribute/writing-a-plugin/)  
[官方api](https://webpack.js.org/api/plugins/)
