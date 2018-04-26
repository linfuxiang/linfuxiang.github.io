# CSS打包
在编写CSS时可能会用到，在此举例使用**PostCSS** 和 **autoprefixer**。

### PostCSS  

	npm i autoprefixer -D	// 自带PostCSS,所以不用安装
	npm i node-sass -D	// 使用Sass,一样无需配置

**.postcssrc**

	// PostCSS配置文件
	{
	  	"plugins": {
	    	"autoprefixer": {
	      		"browsers": ['last 20 versions']
	    	}
	  	}
	}

**index.css**

	/* 源码 */
	div {
		transform: translate(0);
	  	display: flex; 
	}

	/* 编译后 */
	div {
		-webkit-transform: translate(0);
		-ms-transform: translate(0);
		transform: translate(0);
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex; 	
	}