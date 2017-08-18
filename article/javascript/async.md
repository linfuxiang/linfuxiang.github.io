# Async Await  
> 适用于分步骤异步操作  

先定义不同的异步操作函数，返回`Promise`对象

	function p1(time = 1000) {
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                if (true) {
                    resolve(time);
                } else {
                    reject('error1');
                }
            }, 2000)
        });
    }

    function p2(time = 2000) {
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                if (true) {
                    resolve(time);
                } else {
                    reject('error2');
                }
            }, 3000)
        });
    }

定义执行异步操作的方法

	// 一种写法，出错即停止
    async function asyncFoo() {
    	try {
    		console.log(await p1(1000));	// 执行p1的操作，完成之后才进行下面的操作
	        console.log(await p2());	// 执行p2的操作，完成之后才进行下面的操作
	        console.log('finished');	
        } catch(err) {					// 捕捉错误
        	console.log(err);
        }
    }
    // 其他写法，出错仍继续
    async function asyncFoo() {
        await p1().catch(function(err){console.log(err)});
        await p2().catch(function(err){console.log(err)});
        console.log('finished');
    }

    asyncFoo();		//执行asyncFoo函数

实现多个请求并发执行：

	async function asyncFoo() {
        await Promise
        	.all([p1(), p2()])
        	.then(function([p1, p2]) {
            	console.log(p1 + p2);
        	})
        	.catch(function(err) {
        		console.log(err)
    		});
        console.log('finished');
    }

	// 或者以下写法
    async function asyncFoo() {
        let arr = [p1(1000), p1(2000), p1(3000)];
        let result = [];
        for(var i of arr) {
            result.push(await i);
        }
        console.log(result);
    }