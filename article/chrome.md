# Chrome扩展程序  
Chrome扩展程序（也可以当成是插件）是一个十分棒棒的工具，我们会以一个从零开发自定义标签页的角度来入门。  
### 必备  
想要Chrome识别我们的插件，根目录下有一个`manifest.json`就够了。

    {
        // 这里的值必须是2，否则会报错
        "manifest_version": 2,
        "name": "newTab",
        "version": "1.0.0",
        "description": "简单的自定义新标签页",
        // 这是`chrome://extensions/`里的图标
        "icons": {
            "16": "img/icon.png",
            "48": "img/icon.png",
            "128": "img/icon.png"
        },
        // 这是Chrome右上角的相关内容
        "page_action": {
            "default_icon": "img/icon.png",
            "default_title": "simple new tab"
        },
        "homepage_url": "https://linfuxiang.github.io/",
        // 定义新标签页的html文件
        "chrome_url_overrides": {
            "newtab": "newtab/newtab.html"
        },
        // 某些功能需要提前在这里添加才能使用
        "permissions": ["storage"]
    }

然后新建`newtab.html`和对应的`newtab.js`(这里不允许在html中内嵌js代码，只能通过src引入)  
这是newtab.html的代码，一个展示背景图的div，一个上传自定义背景图的input：  

    <body>
        <div id="bg"></div>
        <input type="file" id="file" accept="image/*">
        <script src="newtab.js"></script>
    </body>

这是newtab.js的代码，和普通的Web代码只是多了`chrome`这个全局变量，而`chrome.storage`和平时开发常见的localStorage是类似的。  

    // 初始化背景图
    chrome.storage.local.get({
        img: '',
    }, store => {
        if (store.img) {
            document.querySelector('#bg').style.backgroundImage = `url(${store.img})`
        }
    })
    document.querySelector('#file').addEventListener('change', function(e) {
        let file = this.files[0]
        let reader = new FileReader()
        reader.onload = function(e) {
            // 保存背景图
            chrome.storage.local.set({
                img: e.target.result,
            }, () => {
                document.querySelector('#bg').style.backgroundImage = `url(${e.target.result})`
            })
        }
        reader.readAsDataURL(file)
    })

#### Tips:  
*`chrome.storage.local`*为本地存储，默认最大可存5MB，可以往`manifest.json`的`permissions`添加`unlimitedStorage`来取消这个限制。  
*`chrome.storage.sync`*会和账号同步，也会有相应的内存限制。  
[参考](https://developer.chrome.com/extensions/storage)  

现在就直接可以打开chrome加载这个插件试试效果了（可以等所有idea都开发完成再打包）  
![chrome](/dist/images/chrome.png)

待续......

[代码地址](https://github.com/linfuxiang/new-tab)  
[官方文档](https://developer.chrome.com/extensions/devguide)  
