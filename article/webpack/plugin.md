## Plugin  
一个简单的插件：

    class testPlugin {
        apply(compiler) {
            compiler.hooks.done.tap('test Plugin', compilation => {
                console.log('Hey, I finished.');
            });
            // 支持`tapAsync`和`tapPromise`和`async/await`

            callback();
        });
    }

    module.exports = testPlugin;

#### compiler  
`compiler`可以理解为Webpack实例，是全局唯一的，包含了 Webpack 所有的配置信息，包含`options`，`loaders`，`plugins`等等信息，而`compiler.hooks`则为编译器钩子，可监听编译开始、编译完成、输出。

#### compilation  
`compilation`包含了当前构建的模块的信息，`compilation.hooks`为编译钩子，可监听各模块的构建。

    compiler.hooks.compilation.tap('test Plugin', compilation => {
        compilation.hooks.buildModule.tap('test Plugin', () => {
            // 模块构建前...
        });
    });

[官方教程](https://webpack.js.org/contribute/writing-a-plugin/)  
[官方api](https://webpack.js.org/api/plugins/)
