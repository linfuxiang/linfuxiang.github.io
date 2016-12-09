# 小东西 

	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

	overflow: hidden;
    text-overflow: ellipsis;
   	white-space: nowrap;

## 踩坑日记 
1. inline或inline-block的元素，例如img元素会在底部出现小间隙  
**解决办法：**`display: block;`或者`verticle-align: bottom;`

2. inline-block标签代码中换行造成元素间空隙  
**解决办法：**代码不换行或者设置容器`font-size: 0px;`