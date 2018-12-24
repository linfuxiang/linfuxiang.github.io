### HTTP  
基于TCP/IP协议的网络传输协议，特点是无状态的，由客户端向服务端主动发起的。  
OSI五层（七层）协议物理层、数据链路层、网络层、传输层、（会话层、表示层、）应用层

请求报文包含：  
1. 请求行（请求方法、URL、协议版本）  
2. 请求头（Accept,Host,Cookie,Referer,Cache-control,UA...）  
3. 空行  
4. 请求数据  

响应报文包含：  
1. 响应行（协议版本，状态码-200,404，状态描述）  
2. 响应头（Content-Type,Cache-Control,Server...）  
3. 响应数据  

## HTTPS
在建立TCP/IP链接后对数据进行SSL/TLS加密  
1. 服务端从证书颁发机构获取证书（公钥、私钥）  
2. 把公钥发给客户端  
3. 客户端生成随机密码字符串，使用公钥加密发送给服务端  
4. 服务端使用私钥解密该密码字符串（到此过程为非对称加密）  
5. 之后的内容全部使用该密码字符串进行加密解密（此过程为对称加密）  

## 生成网页的过程：
1. DNS解析，找出IP地址（浏览器->本机->域名服务器）  
2. TCP连接  
3. HTTP请求（HTTPS则需先进行SSL/TSL加密）  
4. 浏览器解析HTML构建DOM树，解析CSS构建CSS的渲染树，将两者合并成一个渲染树，然后把它渲染到浏览器窗口上（如果有CSS或JS资源插在其中则会被阻塞）  
5. JS加载和执行（defer延迟执行和async异步加载）  
	`默认`： 解析到script标签中断HTML的渲染，去加载和执行JS  
	`defer`：异步加载JS，延迟到HTML解析完成之后执行，会阻塞DOMContentLoaded  
	`async`：异步加载JS，加载好马上中断HTML的渲染，并执行  

## DOMContentLoaded, load, readystatechange
`DOMContentLoaded`：在页面被解析完成和静态JS执行完成（JS执行依赖CSS）触发，如果没有JS则在外部CSS加载之前触发  
`load`：在所有静态资源被加载并执行完成包括（CSS、图片、JS等）  
`readystatechange`： `document.readyState`有三种状态↓  

		loading：加载中  
		interactive：页面解析完成，时间上和 DOMContentLoaded 同时发生，不过顺序在它之前  
		complete：页面上的资源都已加载完毕，时间上和 window.onload 同时发生，不过顺序在他之前  

## Preload、Prefetch、Preconnect  
#### Preload  
对于当前页面很有必要的资源使用 `preload`  
- 使用了`preload`的资源被赋予高优先级，优先于其他资源加载  
- 使用`as`属性标明类型  

#### Prefetch    
对于可能在将来的页面中使用的资源使用 `prefetch`   

- `Link Prefetching` 在浏览器闲置时获取资源并缓存下来  

		<link rel="prefetch" href="//cdn.com/a.js">

- `DNS Prefetching` 提前对某个域名进行DNS解析  

		<link rel="dns-prefetch" href="//example.com">


#### Preconnect  
和`DNS Prefetch`相比，`Preconnect`除了提前进行DNS解析，还会进行TCP握手和建立传输层协议。

		<link rel="preconnect" href="http://example.com">


[相关文章1](https://juejin.im/post/58e8acf10ce46300585a7a42)  
[相关文章2](http://bubkoo.com/2015/11/19/prefetching-preloading-prebrowsing/)

## reflow和repaint：
回流必定重绘，重绘不一定回流  

- reflow（回流）元素的尺寸、结构或某些属性发生改变，浏览器重新渲染部分或全部文档  
	导致回流：首次渲染，浏览器窗口尺寸发生变化，元素的尺寸内容发生变化...  
- repaint（重绘）改变样式并不影响它在文档流中的位置  

## 缓存：  
设置Cache-Control为max-age=...或no-cache或no-store或must-revalidate  
过期后验证资源是否有更新（通过Etag）  

- 强缓存  
	`Expire`(HTTP/1.0)和`Cache-Control:max-age=123456`(HTTP/1.1)，如果还没到达有效期，则直接使用缓存的文件，返回`200(from disk cache)`或`200(from memory cache)`  
- 协商缓存  
	`Last-Modified`和`ETag`，如果前面的强缓存判断过期了，则会在此次请求的请求头带上`If-Moified-Since`和`If-None-Match`，去判断是否有更新，如果有则返回`200`和新内容，如果没有则返回`304`  
- 启发式缓存  
	如果没有确定缓存时间的字段，浏览器会触发启发式缓存，取`Date`和`Last-Modified`差值的**10%**作为缓存时间。


[参考文章](https://juejin.im/post/5a6c87c46fb9a01ca560b4d7)

## Vue 3.0  
- Proxy（取代对属性进行代理时需要多个Object.defineProperty带来的性能提升，并支持数组的[index]修改和lenth修改）  
- 新的Virtual DOM（编译时对静态节点做更多优化，来减少运行时的消耗）  
- Tree-shaking  
- 响应式数据监听API（observable, effect）  
- Hooks取代Mixin  
- Time Slicing Support（大量的计算）
