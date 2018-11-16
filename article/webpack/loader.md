## Loader

#### 使用Loader

    // webpack.config.js
    module.exports = {
        // ...
        modules: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        // 由下往上执行
                        {
                            loader: 'babel-loader',
                            // loader: path.resolve('./myLoader.js'),
                            options: {
                                // ...
                            }
                        }
                    ]
                }
            ]
        }
    }

#### 创建Loader

一个简单的`Loader`（把所有的`const`和`let`转换为`var`）：  

    import { getOptions } from 'loader-utils';

    module.exports = function(source) {
        // 通过`loader-utils`包的方法获取options
        const options = getOptions(this);

        // console.log(source);
        source = source.replace(/(const|let)/g, 'var');
        // 对资源应用一些转换……

        return `${ source }`;
    };

[官方教程](https://webpack.js.org/contribute/writing-a-loader/)  
[官方api](https://webpack.js.org/api/loaders/)
