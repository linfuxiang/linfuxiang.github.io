# PostCSS  
> PostCSS is a tool for transforming styles with JS plugins.  
一个用JS插件转化样式的工具。

**PostCSS**本身什么都不做，只是把一串CSS代码解析成**AST（抽象语法树）**，然后通过插件做一些处理，最后再把这个经过处理的**AST**变回CSS代码。  
可以把这个过程想象成：先`JSON.parse`，然后通过JS做一些处理，最后再`JSON.stringify`。

**PostCSS**解析出来的**AST**有`Root根节点`，`Rule选择器`，`Decl样式属性`，`Comment注释`等对象，这些对象都有自己的一些对象方法，例如`after()`，`before()`，`insertAfter()`等等。  

	/*ttt*/
	.a {
		text-align: center;
	}

上面是一串简单的CSS代码，经过转化，它会变成

	Root {
	    raws: { semicolon: false, after: '' },
	    type: 'root',
	    nodes: [
	    	Comment {
	            raws: [Object],
	            type: 'comment',
	            parent: [Circular],
	            source: [Object],
	            text: 'ttt'
	        },
	        Rule {
	            raws: [Object],
	            type: 'rule',
	            nodes: [Array],
	            parent: [Circular],
	            source: [Object],
	            selector: '.a',
	            lastEach: 1,
	            indexes: [Object]
	        }
	    ],
	    source: {
	        input: Input {
	            css: '/*ttt*/\r\n.a {\r\n\ttext-align: center;\r\n}',
	            file: 'F:\\wnmp\\www\\ycf_web_fed\\practice\\linfuxiang\\postcss-demo\\a.css'
	        },
	        start: { line: 1, column: 1 }
	    },
	    lastEach: 1,
	    indexes: { '1': 1 }
	}

那么我们要怎么进行处理呢？  
编写插件，然后在配置文件中引用就行了。  
  
下面是一个简单的插件例子，目的是强制让`text-align`属性的值变成'left'：

	const postcss = require('postcss')
	module.exports = postcss.plugin('postcss-plugin-demo', function(opts = {}) {
		// opts是配置插件时所传的参数
	    // 传入配置相关的代码
	    return function(root, result) {
	        // 遍历rules选择器
	        root.walkRules(function(rule) {
	        	// 遍历decls属性列表
	            rule.walkDecls(/text-align/, function(decl) {
	                decl.value = 'left'
	            })
	        })
	    }
	})

[API文档](http://api.postcss.org/)