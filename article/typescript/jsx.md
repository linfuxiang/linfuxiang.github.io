# 在TypeScript中使用JSX

首先要安装模块包

	npm i react @types/react react-dom @types/react-dom --save

接着在`tsconfig.json`配置文件中添加配置

    "compilerOptions":{
    	"jsx": "react",
    },

然后就可以在`.tsx`文件中编写**React**的代码啦

	import * as React from 'react'
	import * as ReactDOM from 'react-dom'
	
	console.log(React.createElement("div"));
	console.log(<div />);

	ReactDOM.render(
		<div />,
		document.getElementById('app')
	);

