# Promise  
#### 状态  
**pending** , **fulfilled** , **rejected**  

#### 最简单用法：

	var promise = new Promise(function(resolve, reject) {
		if(true) {
			resolve('value');
		} else {
			reject('error');
		}
	});

	promise
		.then(function(value) {
			// success
		})
		.catch(function(error) {
			// error
		});

#### Promise.all：
> 适用于同时进行多个异步操作的情况。

	var p1 = new Promise(function(resolve, reject) {
        setTimeout(() => {
            if (true) {
                resolve(1111);
            } else {
                reject('error1');
            }
        }, 2000)
    });
    var p2 = new Promise(function(resolve, reject) {
        setTimeout(() => {
            if (true) {
                resolve(2222);
            } else {
                reject('error2');
            }
        }, 1000)
    });
    Promise.all([p1, p2])
        .then(([p1, p2]) => {
            console.log(p1, p2);
        })
        .catch(err => console.log(err));

#### Promise.race：  
> 只要p1,p2,p3有一个触发状态改变，p状态也就跟着改变。

    const p = Promise.race(p1, p2, p3);

    p
    .then(response => console.log(response))
    .catch(error => console.log(error));

#### Promise.finally：
> ES2018 引入标准。  

    Promise.prototype.finally = function (callback) {
        let P = this.constructor;
        return this.then(
            value  => P.resolve(callback()).then(() => value),
            reason => P.resolve(callback()).then(() => { throw reason })
        );
    };
    