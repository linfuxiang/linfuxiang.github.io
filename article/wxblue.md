# 微信硬件蓝牙api（前端开发）
>本文仅介绍微信硬件蓝牙开发前端部分基本流程和可能遇到的坑  

所需材料：  
1. 基本的前端三件套(`HTML`,`CSS`,`JS`)  
2. [js-sdk](http://res.wx.qq.com/open/js/jweixin-1.0.0.js)  

配置：  

	wx.config({
	    beta: true,                 //必须配置这个为true,才能调用微信的硬件API
	    debug: true,                //是否开启调试模式，会自动弹一些消息框显示微信返回的数据
	    appId: 公众号的唯一标识,    //后台给的
	    timestamp: 时间戳,          //后台给的
	    nonceStr: 随机字符串,       //后台给的
	    signature: 证书,            //后台给的
	    jsApiList: [                //所有需要调用的接口
	        "openWXDeviceLib",      //初始化设备库（只支持蓝牙设备）
	        "closeWXDeviceLib",     //关闭设备库（只支持蓝牙设备）
	        "getWXDeviceInfos",     //获取当前用户已绑定的蓝牙设备列表
	        "sendDataToWXDevice",   //发送数据给设备
	        "startScanWXDevice",    //扫描设备（无论绑定还是未被绑定的设备都会扫描到）
	        "stopScanWXDevice",     //停止扫描设备
	        "connectWXDevice",      //连接设备
	        "disconnectWXDevice",   //断开设备连接
	        "getWXDeviceTicket",    //获取绑定或解绑硬件的操作凭证
	        //如果需要其他js api可继续添加
	        //监听事件：
	        "onWXDeviceBindStateChange",    //监听硬件设备绑定状态
	        "onWXDeviceStateChange",        //监听连接状态，可以监听连接中、已连接、连接断开
	        "onReceiveDataFromWXDevice",    //监听接收来自硬件设备的数据
	        "onScanWXDeviceResult",         //监听扫描到的设备
	        "onWXDeviceBluetoothStateChange",  //监听手机蓝牙打开或关闭
	    ]
	});

最基本的调用：  

	wx.ready(() => {
	    // config配置成功后调用，所有微信api操作都应在config配置成功后进行。
	    wx.invoke('openWXDeviceLib', {  //初始化硬件设备库
	        'brandUserName': 'gh_xxxxxxxxxx'    //必须加上这个公众号原始ID，否则部分机型无法初始化
	    }, (res) => {
	        //res结果可参考文章底部的微信硬件平台说明文档，或者自己试着输出看看
	    });
	});
	wx.error((res) => {
	    // config配置失败调用。
	});

调用方法和监听的基本形式：  


	wx.invoke(jsApiName, params, callback); //方法，所有方法的参数params都含有默认的'connType': 'blue'字段，此字段可写可不写
	wx.on(listenName, callback);   //监听

>坑：即使不想写`params`参数，也要加个空对象`{}`传参

例子（更多方法和事件可查阅[微信硬件平台说明文档](http://iot.weixin.qq.com/wiki/new/index.html?page=4-7)）：  


	wx.on('onReceiveDataFromWXDevice', (res) => {
	    console.log(Base64.decode(res.base64Data));    //发送数据和接收数据都需要base64编码和解码，下载一个Base64.js即可
	});
	wx.invoke('sendDataToWXDevice', {
	    'deviceId': deviceId, 
	    'connType': 'blue', 
	    'base64Data': Base64.encode(data)
	}, (res) => {
		//用于发送数据（指令）给设备
	});

注意事项：

1. 流程（在回调中执行下一步）：**初始化** -> **扫描设备** ->  **绑定设备**（通过`getWXDeviceTicket`方法获取`ticket`，并发送给后台进行绑定，在监听绑定状态事件中获知是否绑定成功） -> **连接设备**（在监听绑定状态事件中获知是否连接成功） -> **发送数据**（数据都需要经过`Base64`编码和解码，在监听接收设备数据中获取设备发送的数据）
2. 在扫描设备时，已被连接或者已被绑定的设备可能无法被扫描到。
3. 停止扫描没有效果的解决办法：直接使用`closeWXDeviceLib`关闭设备，下次扫描再重新打开。 
4. 扫描一次后，刷新页面或者跳转页面再回来无法再扫描到任何设备解决办法：每次扫描前使用`closeWXDeviceLib`关闭设备再`openWXDeviceLib`重新打开，然后再进行扫描操作。
5. 在绑定设备时，如果已被绑定过，则无法通过监听获知是否绑定成功，只能通过获取设备信息（`getWXDeviceInfos`），并遍历结果获知设备是否绑定，因此绑定成功回调方法应同时写在监听事件中和获取设备信息中。
6. 一些设备在绑定成功后自动连接，同理第5点，连接成功回调方法应同时写在监听事件中和获取设备信息中。 
7. 为解决第5、6点存在的问题，建议进入页面时先获取设备信息并保存下来，在绑定和连接操作的时候即时更新设备信息，在后续方法中可减少操作。
8. 使用微信web开发者工具移动端调试时，不会有报错信息！！！代码中断了代表你写错了，不用怀疑。（使用X5 Blink内核调试除外）
9. 只能扫描到关注了的公众号绑定的硬件，同一硬件不可被多个公众号绑定使用。
10. 如果发送命令后没有返回数据，可尝试多次重发。
11. 在项目上，极有可能流程卡在一些绑定、连接、发送数据操作上，重试和无回应或错误提示是有必要的。 

[微信JS-SDK说明文档](http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html)  
[微信硬件平台说明文档](http://iot.weixin.qq.com/wiki/new/index.html?page=4-7)