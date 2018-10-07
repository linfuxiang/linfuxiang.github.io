# 原生Ajax：
	
	function createXHR(){
		if(typeof XMLHttpRequest != "undefined"){
			return new XMLHttpRequest();
		}else if(typeof ActiveXObject != "undefined"){
			/* IE低版本，IE6- */
			if(typeof arguments.callee.activeXString != "string"){
				var versions = [
				"MSXML2.XMLHttp.6.0", 
				"MSXML2.XMLHttp.3.0",
				"MSXML2.XMLHttp"
				], i, len;
				for(i = 0; len = versions.length; i < len; i++){
					try{
						new ActiveXObject(versions[i]);
						arguments.callee.activeXString = versions[i];
						break;
					}catch(ex){

					}
				}
			}
			return new ActiveXObject(arguments.callee.activeXString);
		}else{
			throw new Error("No XHR object available.");
		}
	}
	/**
	 * responseText  作为响应主体被返回的文本
	 * responseXML  如果响应的内容类型是"text/xml"或"application/xml"，这个属性中将保 存包含着响应数据的 XML DOM文档
	 * status  响应的 HTTP状态
	 * statusText  HTTP状态的说明 
	 * 
	 * onreadystatechange  请求事件处理程序
	 * xhr.readyState属性:
	 * 0还未开始发送，1正在发送请求，2发送成功且接收到全部响应内容，3正在解析响应内容，4解析完成
	 * 
	 * xhr.abort()  取消异步请求
	 *
	 * 默认情况会发送以下头部信息：
	 * Accept：浏览器能够处理的内容类型。 
	 * Accept-Charset：浏览器能够显示的字符集。 
	 * Accept-Encoding：浏览器能够处理的压缩编码。 
	 * Accept-Language：浏览器当前设置的语言。 
	 * Connection：浏览器与服务器之间连接的类型。 
	 * Cookie：当前页面设置的任何 Cookie。 
	 * Host：发出请求的页面所在的域 。 
	 * Referer：发出请求的页面的 URI。注意，HTTP规范将这个头部字段拼写错了，而为保证与规 范一致，也只能将错就错了。（这个英文单词的正确拼法应该是 referrer。） 
	 * User-Agent：浏览器的用户代理字符串。 
	 * 可通过setRequestHeader()发送，通过getResponseHeader()获取头部信息
	 * 可通过getAllResponseHeaders()获取所有头部信息。
	 *
	 * get方法，url需要encodeURIComponent处理，常用于查询
	 * post方法，常用于发送应该被保存的数据
	 * 	XMLHttpRequest 1级：设置Content-Type为"application/x-www-form-urlencoded"，序列化form表单serialize(form)
	 * 	XMLHttpRequest 2级：序列化new FormData([表单])或append(key, value)
	 *
	 * 进度事件：
	 * 	loadstart  接收到数据第一个字节时触发
	 * 	progress  接收响应时持续不断地触发
	 * 	error  请求错误时触发
	 * 	abort  调用abort()时触发
	 * 	load  接收完整响应时触发
	 * 	loadend  通信完成或error、abort或load事件后触发
	 */
	var xhr = createXHR();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
				console.log(xhr.responseText);
			}else{
				console.log(xhr.status);	//不成功
			}
		}
	}
	xhr.open("(get/post)", "(url)", true/false);	//true或false为异步或同步
	xhr.timeout = 1000;
	xhr.ontimeout = function(){
		//do sth
	};
	xhr.setRequestHeader("MyHeader", "MyValue");
	xhr.send(null);