let list = [{
	date: '2018.11.02.',
	img: '/dist/img_sp/20181102.jpg',
	desc: '我们第一次加微信聊天。',
}, {
	date: '2018.11.18.',
	img: '/dist/img_sp/20181118.jpg',
	desc: '你第一次陪我去医院，让我感受到了温暖，同时也保留下了我第一张黑照。',
}, {
	date: '2018.11.25.',
	img: '/dist/img_sp/20181125.jpg',
	desc: '我们去了云台花园和白云山，第一次牵了你的手。',
}, {
	date: '2018.12.09.',
	img: '/dist/img_sp/20181209.jpg',
	desc: '我们第一次去红专厂拍照。',
}, {
	date: '2018.12.25.',
	img: [
		'/dist/img_sp/20181225_1.jpg',
		'/dist/img_sp/20181225_2.jpg',
		'/dist/img_sp/20181225_3.jpg',
	],
	desc: '圣诞节',
}, {
	date: '2019.01.01.',
	img: [
		'/dist/img_sp/20190101_1.jpg',
		'/dist/img_sp/20190101_2.jpg',
	],
	desc: '元旦',
}, {
	date: '2019.01.17.',
	img: '/dist/img_sp/20190117.jpg',
	desc: '第二天你就要回湖北了，超级不舍，所以给你留了纪念。',
}, {
	date: '2019.01.19.',
	img: '/dist/img_sp/20190119.jpg',
	desc: '我们第一次视频聊天，我看到了一个不一样的你。',
}]

var x, y;
var isStarted = false;

// 开始展示图片列表
function start() {
	console.log('start');

	var $first = document.querySelector('#first');
	var $second = document.querySelector('#second');

	let str = '';
	for (let i = 0; i < list.length; i++) {
		let img = '';
		if(typeof list[i].img === 'object') {
			for(let j = 0; j < list[i].img.length; j++) {
				img += `<img src="${ list[i].img[j] }" alt="" class="list-img">`;
			}
		} else {
			img = `<img src="${ list[i].img }" alt="" class="list-img">`;
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
	$first.addEventListener("animationend", function(e) {
		$first.style.display = 'none';
		// $second.style.display = 'block';
		$second.style.position = 'static';

		isStarted = true;
	});


	let $imgDefault = document.querySelector('.img-default');
	$second.addEventListener('click', function(e) {
		console.log(e.target.src);
		if (e.target.tagName.toLowerCase() === 'img') {
			$imgDefault.style.backgroundImage = `url('${ e.target.src }')`;
			$imgDefault.style.display = 'block';
		}
	});
	$imgDefault.addEventListener('click', function(e) {
		$imgDefault.style.backgroundImage = '';
		$imgDefault.style.display = 'none';
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