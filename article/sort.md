# 排序
## 快排 
时间O(nlogn)，空间O(logn)，不稳定  

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

## 归并
时间O(nlogn)，空间O(n)，稳定  

	function mergeSort(arr) {
        var len = arr.length;
        if (len < 2) {
            return arr;
        }
        var middle = Math.floor(len / 2),
            left = arr.slice(0, middle),
            right = arr.slice(middle);
        returnmerge(mergeSort(left), mergeSort(right));
    }

    function merge(left, right) {
        var result = [];

        while (left.length > 0 && right.length > 0) {
            if (left[0] <= right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }

        while (left.length) result.push(left.shift());

        while (right.length) result.push(right.shift());

        return result;
    }

## 希尔  
时间O(nlogn)，空间O(1)，不稳定  

    function shellSort(arr) {
        var len = arr.length,
            temp,
            gap = 1;
        while(gap < len/3) {          //动态定义间隔序列
            gap =gap*3+1;
        }
        for (gap; gap > 0; gap = Math.floor(gap/3)) {
            for (var i = gap; i < len; i++) {
                temp = arr[i];
                for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
                    arr[j+gap] = arr[j];
                }
                arr[j+gap] = temp;
            }
        }
        return arr;
    }