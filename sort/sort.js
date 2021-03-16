let array = [];
$("#add").on("click", function () {
	let value = $("#addNum").val();
	array = randomNumber(+value);
	$("#resource").text(array.join(", "));
	$(".result").text("");
});
$("#clear").on("click", function () {
	array = [];
	$("#resource").text("");
	$(".result").text("");
	$("#addNum").val("");
});
$(".run").on("click", function () {
	let res;

	console.time("原生排序执行时间");
	res = nativeSort(array);
	console.timeEnd("原生排序执行时间");
	$(".native").text(res.join(", "));

	console.time("冒泡排序执行时间");
	res = bubbleSort(array);
	console.timeEnd("冒泡排序执行时间");
	$(".mao").text(res.join(", "));

	console.time("快速排序执行时间");
	res = quickSort(array, 0, array.length - 1);
	console.timeEnd("快速排序执行时间");
	$(".kuai").text(res.join(", "));
});

function randomNumber(q) {
	let arr = [];
	let max = q * 3;
	while (q-- > 0) {
		arr.push(parseInt(Math.random() * max));
	}
	return arr;
}

function nativeSort(arr) {
	return arr.sort(function (a, b) {
		return a - b;
	});
}

function bubbleSort(arr) {
	let i, j;
	let flag;
	for (i = 0; i < arr.length; i++) {
		for (j = i; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				[arr[j], arr[i]] = [arr[i], arr[j]];
			}
		}
	}
	return arr;
}

function quickSort(arr, left, right) {
	if (left >= right) {
		return;
	}
	let i = left,
		j = right,
		key = arr[i];
	while (i < j) {
		while (i < j && arr[j] >= key) {
			j -= 1;
		}
		if (i < j) {
			arr[i] = arr[j];
			i += 1;
		}
		while (i < j && arr[i] < key) {
			i += 1;
		}
		if (i < j) {
			arr[j] = arr[i];
			j -= 1;
		}
	}
	arr[i] = key;
	quickSort(arr, left, i - 1);
	quickSort(arr, i + 1, right);
	return arr;
}
quickSort([1, 2, 0, 5, 3, 8, 6, 4, 7, 9], 0, 9);
