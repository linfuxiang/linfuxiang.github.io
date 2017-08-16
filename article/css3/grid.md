# grid网格布局 

## 创建一个grid网格容器  
给一个元素添加以下属性，使元素变成`grid`网格容器。

	display: grid;			// 容器的宽度默认占满父元素的宽度
	display: inline-grid;	// 容器的宽度默认不占满父元素的宽度

![image](/dist/images/grid/grid1.jpg)
![image](/dist/images/grid/grid2.jpg)

## 显式网格
#### 设置的列与行  
给网格容器设置以下属性，可设置列宽和行高，可以同时使用下列各种尺寸单位。

	grid-template-columns: [rem, px, %, fr, minmax(min, max), repeat(n, value), ...];
	grid-template-rows: [rem, px, %, fr, minmax(min, max), repeat(n, value), ...];

`fr`：网格元素的占比

	grid-template-columns: 1fr 2fr 3fr;

`minmax(min, max)`：`min`和`max`分别是网格的最小尺寸和最大尺寸，如没有可用`auto`代替

	grid-template-columns: minmax(10px, auto);

`repeat(n, value)`：创建重复的网格项目，`n`是有多少个重复网格，`value`为网格尺寸

	grid-template-columns: repeat(3, 50px);

#### 间距  
创建列与列、行与行之间的间距，但不能创建列和行与容器边缘之间的间距。

	grid-row-gap: [px, rem, %, ...];
	grid-column-gap: [px, rem, %, ...];
	grid-gap: [px, rem, %, ...];	// 如果它指定了两个值，那么第一个值是设置grid-row-gap的值，第二个值设置grid-column-gap的值；如果只设置了一个值，表示行和列的间距相等

![image](/dist/images/grid/grid3.jpg)

#### 通过网格线定位网格  
与表格类似，列与列、行与行之间都有一条网格线，编号从1开始递增，ps：在网格元素上使用该属性。

	grid-row-start: 2;
	grid-row-end: 3;
	grid-columns-start: 2;
	grid-columns-end: 3; 
	grid-row: 2;	// grid-row-start和grid-row-end的简写，如果有两个值，用 / 隔开，下同
	grid-columns: 2 / 4;	// grid-column-start和grid-column-end的简写

上述几个属性可使用更简洁的缩写`grid-area`：  

1.  一个值：指定`grid-row-start`和`grid-columns-start`  
2.  两个值：第一个值是`grid-row-start`和`grid-column-start`的值，第二个值是`grid-row-end`和`grid-column-end`的值  
3.  四个值：分别是`grid-row-start`，`grid-column-start`，`grid-row-end`，`grid-column-end`  

	grid-area: 2 / 2 / 3 / 3;
	grid-area: 2 / 2 / 4 / 4;	// 可跨行跨列，其他元素将被挤到别的网格中

![image](/dist/images/grid/grid4.jpg)

> 关键词 `span n` 表示合并多少个行或者列

	grid-area: 2 / 2 / span 2 / span 2;


#### 命名网格线  
可通过给网格线命名从而更好地定位网格。
	
	grid-template-rows: [row-1-start] 1fr [row-2-start] 1fr [row-2-end];
	grid-template-columns: [col-1-start] 1fr [col-2-start] 1fr [col-3-start] 1fr [col-3-end];

可用 `repeat(n, [row-start] 1fr [row-end])` 快速给网格线命名，不必担心网格线重名问题，因为浏览器会自动在网格线名称后加上对应的数字。

#### 通过对网格区域命名来定位网格项目

	grid-template-areas: "header header" "content sidebar" "footer footer"; 
	grid-template-rows: 50px 1fr 40px; 
	grid-template-columns: 1fr 50px;

![image](/dist/images/grid/grid5.jpg)  
`grid-row-start`、`grid-row-end`、`grid-column-start`和`grid-column-end`可以引用网格区域名称，用来设置网格项目位置，同样地，`grid-row`和`grid-column`还有`grid-area`也可以，例如：

	grid-area: sidebar;

#### 设置网格流方向  

	grid-auto-flow: [row | column];	// 定义网格流的方向，默认是row

## 隐式网格  
> 当网格项目确认在显式网格之外时就会创建隐性网格，当没有足够的空间或者显式的网格轨道来设置网格项目，此时网格项目就会自动创建隐式网格。

#### 定义隐式网格  

	grid-auto-rows: [rem, px, %, fr, minmax(min, max), repeat(n, value), ...];	// 定义隐式网格的高
	grid-auto-columns: [rem, px, %, fr, minmax(min, max), repeat(n, value), ...];	// 定义隐式网格的宽

#### 隐式地命名网格区域  
如果行和列都有`box-start`和`box-end`的网格线名称，则创建了一个隐式的网格区域`box`，可用于定位网格。规则是网格线名称添加`-start`和`-end`。

	grid-template-rows: 1fr [box-start] 1fr [box-end] 1fr;
	grid-template-columns: 1fr [box-start] 1fr [box-end] 1fr;

![image](/dist/images/grid/grid6.jpg)
	
#### 隐式地命名网格线  
与隐式命名网格区域类似，只要命名了网格区域，则创建了隐式的网格线，规则创建的网格线名称是在网格命名后添加`-start`和`-end`，例如一个网格为`box`，则它紧贴的行与列网格线为`box-start`和`box-end`。

## 网格项目层级 
在通过网格线或者网格区域定位网格时，如果网格重叠了，可设置`z-index`来指定其层级。
	
## 网格项目对齐方式  
`justify-items`和`justify-self`指定网格项目沿着**行轴**对齐方式，分别在 **容器** 和 **网格项目** 上使用，`align-items`和`align-self`指定网格项目沿着**列轴**对齐方式，两者分别在 **容器** 和 **网格项目** 上使用。可用属性有：  

1.  `auto`  
2.  `normal`  
3.  `start`  
4.  `end`  
5.  `center`  
6.  `stretch`（默认值）
7.  `baseline`  
8.  `first baseline`  
9.  `last baseline`   

		justify-items: start;
		align-items: start;

![image](/dist/images/grid/grid7.jpg)

## 网格轨道对齐方式
`align-content`指定网格轨道沿着行轴对齐方式，`justify-content`指定网格轨道沿着列轴对齐方式。可用属性有：

1.  `normal`（默认值）
2.  `start`
3.  `end`
4.  `center`
5.  `stretch`
6.  `space-around`
7.  `space-between`
8.  `space-evenly`
9.  `baseline`
10.  `first baseline`
11.  `last baseline`   

		justify-content: end;
		align-content: end;

![image](/dist/images/grid/grid8.jpg)

**网格轨道对齐方式** 与 **网格项目对齐方式** 的差别在于，前者作用于网格项目整体，后者作用于单个网格项目，可用属性中有些看名字都能看得出效果，有些看不懂的就摸索一下吧

[参考文献](https://www.w3cplus.com/css/learncssgrid.html)