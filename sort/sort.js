let array = [];
$('#add').on('click', function() {
    let value = $('#addNum').val();
    array = randomNumber(+value);
    $('#resource').text(array.join(', '));
    $('.result').text('');
})
$('#clear').on('click', function() {
    array = [];
    $('#resource').text('');
    $('.result').text('');
    $('#addNum').val('');
})
$('.run').on('click', function() {
    let res;

    console.time('原生排序执行时间');
    res = nativeSort(array);
    console.timeEnd('原生排序执行时间');
    $('.native').text(res.join(', '));

    console.time('冒泡排序执行时间');
    res = bubbleSort(array);
    console.timeEnd('冒泡排序执行时间');
    $('.mao').text(res.join(', '));

    console.time('快速排序执行时间');
    res = quickSort(array, 0, array.length - 1);
    console.timeEnd('快速排序执行时间');
    $('.kuai').text(res.join(', '));
})

function randomNumber(q) {
    let arr = [];
    let max = q * 3;
    while (q-- > 0) {
        arr.push(parseInt(Math.random() * max));
    }
    return arr;
}

function nativeSort(arr) {
    return arr.sort(function(a, b) {
        return a - b;
    })
}

function bubbleSort(arr) {
    let i, j;
    let flag;
    for(i = 0; i < arr.length; i++) {
        for(j = i; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                [arr[j], arr[i]] = [arr[i], arr[j]];
            }
        }
    }
    return arr;
}

function quickSort(arr, left, right) {
    if (left >= right) {
        return arr;
    }
    let i = left,
        j = right,
        key = arr[i];
    let newArr = arr;
    // true 为向前，false 为向后
    let flag = true;
    while (i < j) {
        if (flag) {
            // 向前遍历
            if (key > newArr[j]) {
                [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
                // console.log(i, j, newArr);
                flag = !flag;
            } else {
                j--;
            }
        } else {
            // 向后遍历
            if (key < newArr[i]) {
                [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
                // console.log(i, j, newArr);
                flag = !flag;
            } else {
                i++;
            }
        }
    }
    return [].concat(
        quickSort(newArr.slice(0, i), 0, i - 1),
        key,
        quickSort(newArr.slice(j + 1), 0, right - j - 1)
    )

}