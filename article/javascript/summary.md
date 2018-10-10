### HTTP  
基于TCP/IP协议的网络传输协议，特点是无状态的，由客户端向服务端主动发起的

请求报文包含：  
1. 请求行（请求方法、URL、协议版本）  
2. 请求头（Accept,Host,Cookie,Referer,Cache-control,UA...）  
3. 空行  
4. 请求数据  

响应报文包含：  
1. 响应行（协议版本，状态码-200,404，状态描述）  
2. 响应头（Content-Type,Cache-Control,Server...）  
3. 响应数据  
  
### HTTPS
在建立TCP/IP链接后对数据进行SSL/TSL加密  
1. 服务端从证书颁发机构获取证书（公钥、私钥）  
2. 把公钥发给客户端  
3. 客户端生成随机密码字符串，使用公钥加密发送给服务端  
4. 服务端使用私钥解密该密码字符串（到此过程为非对称加密）  
5. 之后的内容全部使用该密码字符串进行加密解密（此过程为对称加密）  

### 生成网页的过程：
1. DNS解析，找出IP地址（浏览器->本机->域名服务器）  
2. TCP连接  
3. HTTP请求（HTTPS则需先进行SSL/TSL加密）  
4. 浏览器解析HTML构建DOM树，解析CSS构建CSS的渲染树，将两者合并成一个渲染树，然后把它渲染到浏览器窗口上（如果有CSS或JS资源插在其中则会被阻塞）  
5. JS加载和执行（defer延迟执行和async异步执行）  
	defer：延迟到HTML解析完成之后执行，会阻塞DOMContentLoaded  
	async：异步加载，加载好马上执行  
	
### DOMContentLoaded, load, readystatechange
**DOMContentLoaded**：在页面被解析完成和静态JS执行完成（JS执行依赖CSS）触发  
**load**：在所有静态资源被加载并执行完成包括（CSS、图片、JS等）  
**readystatechange**： **document.readyState**有三种状态  
	loading：加载中  
	interactive：页面解析完成，时间上和 DOMContentLoaded 同时发生，不过顺序在它之前  
	complete：页面上的资源都已加载完毕，时间上和 window.onload 同时发生，不过顺序在他之前  

### reflow和repaint：
回流必定重绘，重绘不一定回流  
1. reflow（回流）元素的尺寸、结构或某些属性发生改变，浏览器重新渲染部分或全部文档  
	导致回流：首次渲染，浏览器窗口尺寸发生变化，元素的尺寸内容发生变化...  
2. repaint（重绘）改变样式并不影响它在文档流中的位置  

### 缓存：  
设置Cache-Control为max-age=...或no-cache或no-store或must-revalidate  
过期后验证资源是否有更新（通过Etag）  

Vue 3.0
1. Proxy
2. 新的Virtual DOM