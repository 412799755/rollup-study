//js排序大全
function swap(indexA,indexB,arr){
    let tmp = arr[indexA]
    arr[indexA] = arr[indexB]
    arr[indexB] = tmp
}

//选择排序 O(n²) 在所有的完全依靠交换去移动元素的排序方法中，选择排序属于非常好的一种。 不稳定
function SelectionSort(arr){
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[min]){min = j}
        }
        if(min !==i){
            swap(min,i,arr)
        }
    }
    return arr
}
SelectionSort([5,2,8,9,4,2,1,7])

//插入排序 O(n²)
function insertSort(arr){
    for (let i = 1; i < arr.length-1; i++) {
        for (let j = i; j >0; j--) {
            if(arr[j] < arr[j-1]){
                swap(j,j-1,arr)
            }else{
                break
            }
        }
    }
    return arr
}
insertSort([5,2,8,9,4,2,1,7])

// 冒泡排序 O(n²) 平均和最坏情况下的时间复杂度都是O(n^2)，最好情况下都是O(n) 空间复杂度是O(1),可以用标记来判断是否交换
function bubbleSort(arr){
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
            if(arr[j] > arr[j+1]){swap(j,j+1,arr)}
        }
    }
    return arr
}
bubbleSort([5,2,8,9,4,2,1,7])

//快速排序  O(n*log n) 最坏O(n²)
Array.prototype.quickSort = function() {
    const l = this.length
    if(l < 2) return this
    const basic = this[0], left = [], right = []
    for(let i = 1; i < l; i++) {
        const iv = this[i]
        iv >= basic && right.push(iv) // to avoid repeatly element.
        iv < basic && left.push(iv)
    }
    return left.quickSort().concat(basic, right.quickSort())
}
const quickSort = (array) => {
    const sort = (arr, left = 0, right = arr.length - 1) => {
        if (left >= right) {//如果左边的索引大于等于右边的索引说明整理完毕
            return
        }
        let i = left
        let j = right
        const baseVal = arr[j] // 取无序数组最后一个数为基准值
        while (i < j) {//把所有比基准值小的数放在左边大的数放在右边
            while (i < j && arr[i] <= baseVal) { //找到一个比基准值大的数交换
                i++
            }
            arr[j] = arr[i] // 将较大的值放在右边如果没有比基准值大的数就是将自己赋值给自己（i 等于 j）
            while (j > i && arr[j] >= baseVal) { //找到一个比基准值小的数交换
                j--
            }
            arr[i] = arr[j] // 将较小的值放在左边如果没有找到比基准值小的数就是将自己赋值给自己（i 等于 j）
        }
        arr[j] = baseVal // 将基准值放至中央位置完成一次循环（这时候 j 等于 i ）
        sort(arr, left, j-1) // 将左边的无序数组重复上面的操作
        sort(arr, j+1, right) // 将右边的无序数组重复上面的操作
    }
    const newArr = array.concat() // 为了保证这个函数是纯函数拷贝一次数组
    sort(newArr)
    return newArr
}

//归并排序  平均 最好 最坏 O(n*log n)
function mergeSort(arr){
    if(arr.length <=1) return arr;
    var middle = Math.floor(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right){
    var result = [];
    while(left.length > 0 && right.length > 0){
        if(left[0] < right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    return result.concat(left, right);
}

//堆排序
Array.prototype.heap_sort = function() {
    var arr = this.slice(0);
    function swap(i, j) {
        var tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    function max_heapify(start, end) {
        //建立父節點指標和子節點指標
        var dad = start;
        var son = dad * 2 + 1;
        if (son >= end)//若子節點指標超過範圍直接跳出函數
            return;
        if (son + 1 < end && arr[son] < arr[son + 1])//先比較兩個子節點大小，選擇最大的
            son++;
        if (arr[dad] <= arr[son]) {//如果父節點小於子節點時，交換父子內容再繼續子節點和孫節點比較
            swap(dad, son);
            max_heapify(son, end);
        }
    }

    var len = arr.length;
    //初始化，i從最後一個父節點開始調整
    for (var i = Math.floor(len / 2) - 1; i >= 0; i--)
        max_heapify(i, len);
    //先將第一個元素和已排好元素前一位做交換，再從新調整，直到排序完畢
    for (var i = len - 1; i > 0; i--) {
        swap(0, i);
        max_heapify(0, i);
    }

    return arr;
};
var a = [1,5,7,8,9,4,6,3];
console.log(a.heap_sort());


