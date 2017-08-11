# grid网格布局 

## 创建一个grid网格容器  
给一个元素添加以下属性，使元素变成`grid`网格容器。

	display: grid;			// 子元素的宽度默认占满容器的宽度
	display: inline-grid;	// 子元素的宽度默认不占满容器的宽度

## 设置网格的列与行  
给网格容器设置以下属性，可设置列宽和行高。

	grid-template-columns: [fr, rem, px, %, minmax( , ), repeat(n, value), ...];
	grid-template-rows: [fr, rem, px, %, minmax( , ), repeat(n, value), ...];

	grid-row-gap: [px, rem, %, ...];
	grid-column-gap: [px, rem, %, ...];
	grid-gap: [px, rem, %, ...];

	grid-row-start: ;
	grid-row-end: ;
	grid-columns-start: ;
	grid-columns-end: ;
	grid-row: ;
	grid-columns: ;
	grid-area: ;

	关键词 span n

## 命名网格线  
	
	grid-template-rows: [row-1-start] 1fr [row-2-start] 1fr [row-2-end];
	grid-template-columns: [col-1-start] 1fr [col-2-start] 1fr [col-3-start] 1fr [col-3-end];

	可用 repeat(n, [row-start] 1fr [row-end]) 代替

## 网格区域命名和定位网格项目

