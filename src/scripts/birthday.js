const list = [{
	date: '2018.11.02.',
	img: '/dist/img_sp/20181102.jpg',
	desc: '我们加了微信，说了第一句问候语，任静哈。',
	init: false,
}, {
	date: '2018.11.10.',
	img: '/dist/img_sp/20181110.jpg',
	desc: '我们第一次看电影。',
	init: false,
}, {
	date: '2018.11.18.',
	img: [
		'/dist/img_sp/20181118_1.jpg',
		'/dist/img_sp/20181118_2.jpg',
	],
	desc: '你第一次陪我去医院，让我感受到了温暖，同时也保留下了我第一张黑照。',
	init: false,
}, {
	date: '2018.11.25.',
	img: '/dist/img_sp/20181125.jpg',
	desc: '我们去了云台花园和白云山，第一次牵了你的手。',
	init: false,
}, {
	date: '2018.12.09.',
	img: '/dist/img_sp/20181209.jpg',
	desc: '我们第一次去红专厂拍照。',
	init: false,
}, {
	date: '2018.12.25.',
	img: [
		'/dist/img_sp/20181225_1.jpg',
		'/dist/img_sp/20181225_2.jpg',
		'/dist/img_sp/20181225_3.jpg',
	],
	desc: '圣诞节',
	init: false,
}, {
	date: '2019.01.01.',
	img: [
		'/dist/img_sp/20190101_1.jpg',
		'/dist/img_sp/20190101_2.jpg',
	],
	desc: '元旦',
	init: false,
}, {
	date: '2019.01.17.',
	img: '/dist/img_sp/20190117.jpg',
	desc: '第二天你就要回湖北了，超级不舍，所以给你留了纪念。',
	init: false,
}, {
	date: '2019.01.19.',
	img: '/dist/img_sp/20190119.jpg',
	desc: '我们第一次视频聊天，我看到了一个不一样的你。',
	init: false,
}, {
	date: '未来',
	img: '/dist/img_sp/love.png',
	desc: '想跟你留下更多回忆，想跟你一直走下去。',
	init: false,
}]

let x, y;
let isStarted = false;

// 开始展示图片列表
function start() {
	console.log('start');

	var $first = document.querySelector('#first');
	var $second = document.querySelector('#second');

	let str = '';
	for (let i = 0; i < list.length; i++) {
		let img = '';
		if (list[i].img && typeof list[i].img === 'object') {
			if (i < 2) {
				for (let j = 0; j < list[i].img.length; j++) {
					img += `<img src="${ list[i].img[j] }" alt="" class="list-img"">`;
				}
				list[i].init = true;
			} else {
				for (let j = 0; j < list[i].img.length; j++) {
					img += `<img data-src="${ list[i].img[j] }" alt="" class="list-img" src="/dist/img_sp/love.png">`;
				}
			}
		} else if (list[i].img) {
			if (i < 2) {
				img = `<img src="${ list[i].img }" alt="" class="list-img">`;
				list[i].init = true;
			} else {
				img = `<img data-src="${ list[i].img }" alt="" class="list-img" src="/dist/img_sp/love.png">`;
			}
		}

		str += `<li class="li">
			<div class="list-icon">
				<div class="list-icon-ver"></div>
				<div class="list-icon-hor"></div>
			</div>
			<p class="list-date">
				${ list[i].date }
			</p>
			${img}
			<p class="list-desc">
				${ list[i].desc }
			</p>
		</li>`;
	}
	$second.innerHTML = str;

	$first.className = 'left';
	// 监听切换动画结束
	$first.addEventListener("animationend", function(e) {
		$first.style.display = 'none';
		// $second.style.display = 'block';
		$second.style.position = 'static';

		isStarted = true;
	});

	// 图片点击放大效果
	let $imgDefault = document.querySelector('.img-default');
	$second.addEventListener('click', function(e) {
		e.preventDefault();
		if (e.target.tagName.toLowerCase() === 'img') {
			$imgDefault.style.backgroundImage = `url('${ e.target.src }')`;
			$imgDefault.style.display = 'block';
		}
	});
	// $imgDefault.addEventListener('touchmove', function(e) {
	// 	e.stopPropagation();	
	// })
	// 再次点击图片返回
	$imgDefault.addEventListener('click', function(e) {
		$imgDefault.style.backgroundImage = '';
		$imgDefault.style.display = 'none';
	});
	// 列表滚动加载图片（函数节流）
	let flag = false;
	window.addEventListener('scroll', function() {
		if (flag) {
			return false;
		}
		flag = true;
		setTimeout(function() {
			let scrollY = window.scrollY,
				clientHeight = document.documentElement.clientHeight;
			for (let i = 0; i < list.length; i++) {
				if (!list[i].init) {
					if (!list[i].el) {
						list[i].el = document.querySelectorAll('#second li')[i];
						list[i].img = list[i].el.querySelectorAll('img');
					}
					let li = list[i].el;
					// console.log(li.getBoundingClientRect());
					let rect = li.getBoundingClientRect(),
						y = rect.y,
						height = rect.height;
					// console.log(i, rect, y, scrollY);
					console.log(i);
					if (y + height > 0 && y < clientHeight - 30) {
						list[i].img.forEach(function(item) {
							item.src = item.getAttribute('data-src');
						});
						list[i].init = true;
					}
				}
			}
			flag = false;
		}, 250);
	});
}

// start();

document.querySelector('.bottom').addEventListener('click', function() {
	if (isStarted) {
		document.querySelector('.bottom').removeEventListener('click');
		return false;
	}
	start();
});
document.documentElement.addEventListener('touchstart', function(e) {
	if (isStarted) {
		// document.documentElement.removeEventListener('touchstart', function);
		return false;
	}
	var touch = e.targetTouches && e.targetTouches[0];
	x = touch.clientX;
	y = touch.clientY;
	console.log(x, y);
});
// document.documentElement.addEventListener('touchmove', function(e) {
// console.log(e.targetTouches[0])
// });
document.documentElement.addEventListener('touchend', function(e) {
	if (isStarted) {
		// document.documentElement.removeEventListener('touchend', function);
		return false;
	}
	var touch = e.changedTouches && e.changedTouches[0];
	var _x = touch.clientX;
	var _y = touch.clientY;
	console.log(_x, _y);
	if (_y - y < -50) {
		start();
	}
});