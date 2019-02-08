const list = [{
	date: '2018.11.02.',
	img: '/dist/img_sp/20181102.jpg',
	desc: '我们加了微信，说了第一句问候语，任静哈，你好，请多指教。',
	init: false,
}, {
	date: '2018.11.10.',
	img: '/dist/img_sp/20181110.jpg',
	desc: '粗心的我买错了回老家的高铁票，还没办法改签，但也错打正着，在那个周末，我们约了第一次吃饭和看电影，那时候觉得你是个可爱的爱吃鱼头的话痨女孩子。',
	init: false,
}, {
	date: '2018.11.18.',
	img: [
		'/dist/img_sp/20181118_1.jpg',
		'/dist/img_sp/20181118_2.jpg',
	],
	desc: '那个时候我经常流鼻血，鼻炎也一直拖着不好，你硬是拉着我说陪我去医院，现在想起来真是个暖宝宝呢，嘻嘻。',
	init: false,
}, {
	date: '2018.11.25.',
	img: '/dist/img_sp/20181125.jpg',
	desc: '天下着毛毛细雨，我们依然坚持去了云台花园和白云山，我抱着害羞又激动的心情问你：“我可以牵着你吗”，没想到这一整天的大手牵小手，让我“难受”了一整天，我连抱着你都不敢靠太近（害羞脸）。',
	init: false,
}, {
	date: '2018.12.09.',
	img: '/dist/img_sp/20181209.jpg',
	desc: '谢谢你和我拍了很多好看的照片，我会继续进修我的拍照技术。',
	init: false,
}, {
	date: '2018.12.25.',
	img: [
		'/dist/img_sp/20181225_1.jpg',
		'/dist/img_sp/20181225_2.jpg',
		'/dist/img_sp/20181225_3.jpg',
	],
	desc: '我们过的第一个有意义的节日，在夜色的陪伴下，我们坐在华工运动场，我把你的礼物拆开之后，我对你的好感突然就升华成喜欢了，忍不住跟你表了白，还第一次亲吻了你涂满口红的嘴唇（害我一嘴红）和...（嘻嘻）。',
	init: false,
}, {
	date: '2019.01.01.',
	img: [
		'/dist/img_sp/20190101_1.jpg',
		'/dist/img_sp/20190101_2.jpg',
	],
	desc: '元旦，你来了我家，我们做饭吃，看电影，看跨年晚会，看你的朱老师，喝早茶……',
	init: false,
}, {
	date: '2019.01.17.',
	img: '/dist/img_sp/20190117.jpg',
	desc: '第二天你就要回湖北了，超级不舍，所以给你留了点纪念。',
	init: false,
}, {
	date: '2019.01.19.',
	img: '/dist/img_sp/20190119.jpg',
	desc: '我们第一次视频聊天，一聊就坚持了十几天，我看到了一个不一样的你，我这个p得还不错吧（骄傲脸）。',
	init: false,
}, {
	date: '未来',
	img: '/dist/img_sp/love.png',
	desc: '想跟你留下更多回忆，想跟你一直走下去。（本来想在这里贴朱老师和二硕的照片的，还是算了，看本帅宝就行了）',
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
					// rect.x和rect.y在微信中不能使用
					let rect = li.getBoundingClientRect(),
						top = rect.top,
						height = rect.height;
					if (top + height > 0 && top < clientHeight - 30) {
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
	// console.log(x, y);
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
	// console.log(_x, _y);
	if (_y - y < -50) {
		start();
	}
});

// 背景音乐相关
let $music = document.querySelector('#music'),
	$icon = document.querySelector('#icon');

$music.addEventListener('canplay', function() {
	$icon.style.display = 'block';
	$icon.addEventListener('click', function() {
		if (this.className) {
			this.className = '';
			$music.play();
		} else {
			this.className = 'paused';
			$music.pause();
		}
	});
});

// 音乐自动播放
// function autoPlayMusic() {
// 	// 自动播放音乐效果，解决浏览器或者APP自动播放问题
// 	function musicInBrowserHandler() {
// 		musicPlay(true);
// 		document.documentElement.removeEventListener('touchstart', musicInBrowserHandler);
// 	}
// 	document.documentElement.addEventListener('touchstart', musicInBrowserHandler);

// 	// 自动播放音乐效果，解决微信自动播放问题
// 	function musicInWeixinHandler() {
// 		musicPlay(true);
// 		document.addEventListener("WeixinJSBridgeReady", function() {
// 			musicPlay(true);
// 		}, false);
// 		document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
// 	}
// 	document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
// }

// function musicPlay(isPlay) {
// 	var audio = document.getElementById('music');
// 	if (isPlay && audio.paused) {
// 		audio.play();
// 	}
// 	if (!isPlay && !audio.paused) {
// 		audio.pause();
// 	}
// }
// autoPlayMusic();