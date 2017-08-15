## 多边形裁剪

	clip-path: polygon(0 50%, 100% 0, 100% 100%);
	-webkit-clip-path: polygon(0 50%, 100% 0, 100% 100%);
	//根据各个点勾勒出一个路径进行裁剪

![image](/dist/images/clip/clip1.jpg)

## 圆形裁剪

	clip-path: circle(30% at 50% 50%);
	-webkit-clip-path: circle(30% at 50% 50%);
	//半径 at 圆心

![image](/dist/images/clip/clip2.jpg)

## 椭圆裁剪

	clip-path: ellipse(20% 50% at 50% 50%);
	-webkit-clip-path: ellipse(20% 50% at 50% 50%);
	//x轴的点到中心的距离 y轴的点到中心的距离 at 中心点

![image](/dist/images/clip/clip3.jpg)

## 特殊形状裁剪

	clip-path: inset(35% 35% 35% 35% round 0% 70% 0% 70%);
	-webkit-clip-path: inset(35% 35% 35% 35% round 0% 70% 0% 70%);
	//裁剪部分距离四条边的距离（上，右，下，左） round 四个角的圆角（上左，上右，下右，下左）

![image](/dist/images/clip/clip4.jpg)

PS:参考原文[http://yunkus.com/css-clip-path/](http://yunkus.com/css-clip-path/)