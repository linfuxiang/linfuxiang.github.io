var testArr = [21, 32, 43, 98, 54, 10, 45, 23, 4, 14, 10, 4, 66, 86];
var array = [];
document.querySelector('#add').addEventListener('click', () => {
    let value = document.querySelector('#addNum').value;
    if (/\d+/.test(value)) {
        array.push(+value);
        document.querySelector('#resource').innerText = array.join(', ');
        document.querySelector('#addNum').value = '';
        document.querySelector('#addNum').focus();
    }
})
document.querySelector('#clear').addEventListener('click', () => {
    array = [];
    document.querySelector('#resource').innerText = '';
    document.querySelector('#result').innerText = '';
    document.querySelector('#addNum').value = '';
})
document.querySelector('#run').addEventListener('click', () => {
    document.querySelector('#result').innerText = quickSort(array, 0, array.length - 1).join(', ');
})

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
                console.log(i, j, newArr);
                flag = !flag;
            } else {
                j--;
            }
        } else {
            // 向后遍历
            if (key < newArr[i]) {
                [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
                console.log(i, j, newArr);
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