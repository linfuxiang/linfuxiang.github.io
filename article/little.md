## zzzzz
#### 排序算法

[排序算法](/sort)   

- 冒泡：两两比较，把大的往后靠（稳定）  
- 选择：选择一个最小的记录下位置，和无序区第一个交换位置（不稳定）  
- 插入：在无序区取一个元素插入有序区的正确位置（稳定）  
- 快排：选择一个基准数，前后交叉顺序比对把小的都放在它前面，大的放在后面，再分组递归（不稳定）  
- 堆排序：构建大顶堆（从`len / 2 - 1`的位置开始构建），然后将第一个和最后一个交换，重新构建大顶堆，重复前两步（不稳定）  
- 基数排序：根据位数（个-十-百...）排序和收集（稳定）

#### 其他算法  

- 滑动窗口（最长不重复字符串）
- 中心扩散（回文字符串）
- 双指针法（盛最多水的容器）


#### 图片上传

	var reader = new FileReader();
    reader.onload = function(e) {
        // e.target.result 是图片base64编码
    };
    reader.readAsDataURL(e.target.files[0]);

#### +、~~、|

	+ 1.1 	// 1.1
	+ '1.1'	// 1.1
	+ '1a'	// NaN
	~~ 1.1 	// 1
	~~ '1.1'// 1
	~~ '1a' // 0
	1.1 | 0 //1
	'1.1' | 0 //1
	'1a' | 0 //0

#### 判断奇偶  

	num & 1 === 0 // 偶数
	num & 1 === 1 // 奇数

#### 调试页面

	// 在Chrome控制台输入下列代码，会为每个HTML元素添加一个边框
	// $$()是Chrome特有的自带方法，相当于document.querySelectorAll(),还可以用document.all代替
	// 十六进制颜色值从'000000' -> 'ffffff'，转换为二进制即0 -> 1111 1111 1111 1111 1111 1111，十进制即2^24-1
	// 求随机数，Math.random()*2^24即可
	// 使用左移运算<<起求2^24，即1<<24
	// 再使用~~取整
	// 最后使用toString()方法转换为十六进制
	[].forEach.call($$("*"), function(a) {
  		a.style.outline = "1px solid #" + (~~(Math.random() * (1<<24))).toString(16);
	});

[参考](https://sdk.cn/news/3025)

#### 不增加变量互换数值

	// ^ 为异或运算
	// 假设a = 01，b = 10
	a ^= b;	// a：01 ^ 10 -> 11
	b ^= a;	// b：10 ^ 11 -> 01
	a ^= b;	// c：11 ^ 01 -> 10

	// ES6
	[a, b] = [b, a];

#### 取最大最小值

	Math.max.apply(Math, []);
	Math.min.apply(Math, []);

#### 判断数组

	Object.prototype.toString.call(someObj) === '[object Array]';

#### 类数组对象转化为数组

	Array.prototype.slice.call(someObj);

#### 数组去重

	// ES6
	[...new Set(arr)]

#### 格式化金钱

	MONEY.toLocaleString('en-US');

	MONEY.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

#### 清除浮动
1. 添加新元素  

		<div class="outer">
		    <div class="inner">1</div>
		    <div class="clear"></div>
		</div>

		.clear{
			clear: both; 
			height: 0; 
			line-height: 0; 
			font-size: 0;
		}

2. 使用`overflow`  

		<div class="outer">
		    <div class="inner">1</div>
		</div>

		.outer {		
			overflow: auto;
	    	zoom: 1;		// for IE6/7
		}  

3. 使用`:after`

		<div class="outer">
		    <div class="inner">1</div>
		</div>

		.outer {		// for IE6/7
			zoom:1;
		}    
		.outer:after {
			clear: both;
			content: '';
			display:block; 
			width: 0;
			height: 0;
			visibility:hidden;
		}

#### iframe

	// 父元素
	<iframe src="xxx.html" frameborder="0" id="myIframe"></iframe>

	document.getElementById('myIframe').onload = function(e) {
        var iframeWindow = document.getElementById("myIframe").contentWindow,	// 子iframe的window对象
            iframeDocument = iframeWindow.document;								// 子iframe的document对象
    };

	// 子iframe
    window.addEventListener('message', function(e) {
    	window.top;			// 访问父元素
    });

    // 判断是否iframe中打开页面
    if(!!window.frameElement) {
		return true;
    }

#### mouseover, mouseenter区别
`mouseover`：鼠标指针穿过被选元素或其子元素，都会触发 `mouseover` 事件。  
`mouseenter`：只有在鼠标指针穿过被选元素时，才会触发 `mouseenter` 事件。

#### currentTarget, target区别  
`currentTarget`：绑定事件的元素  
`target`：触发（例如点击）的元素

#### getBoundingClientRect()获取元素尺寸信息  

	someEl.getBoundingClientRect()

#### 笔记本

	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

	// 单行省略
	overflow: hidden;
    text-overflow: ellipsis;
   	white-space: nowrap;

	// 多行省略
   	overflow: hidden; 
	text-overflow: ellipsis;
	display: -webkit-box; 
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2; 	// 行数

#### 踩坑日记 
1. inline或inline-block的元素，例如img元素会在底部出现小间隙  
**解决办法：**`display: block;`或者`verticle-align: bottom;`

2. inline-block标签代码中换行造成元素间空隙  
**解决办法：**代码不换行或者设置容器`font-size: 0px;`

#### HTML5视频播放&直播  
`video` + `MSE` + `websocket`  
[h5视频](/pdf/html5-video-page-dev-summary.pdf)  
[flash->html5](/pdf/web-video-from-flash-to-html5.pdf)  

#### BFC  
1. 根元素或其它包含它的元素
2. 浮动 (元素的`float`不为`none`)
3. 绝对定位元素 (元素的`position`为`absolute`或`fixed`)
4. 行内块`inline-blocks`(元素的 `display: inline-block`)
5. 表格单元格(元素的`display: table-cell`，`HTML`表格单元格默认属性)
6. `overflow`的值不为`visible`的元素
7. 弹性盒 `flex boxes` (元素的`display: flex`或`inline-flex`)

#### Window创建文件

	type nul>[文件名]

#### 输出目录结构树  

	tree /f>list.txt