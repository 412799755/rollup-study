/**
 *
 * @param indexA
 * @param indexB
 * @param arr
 */
function swap(indexA,indexB,arr){
    let tmp = arr[indexA]
    arr[indexA] = arr[indexB]
    arr[indexB] = tmp
}
//选择排序 O(n²) 在所有的完全依靠交换去移动元素的排序方法中，选择排序属于非常好的一种。 不稳定
function SelectionSort(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[i]){swap(i,j,arr)}
        }
    }
    return arr
}
SelectionSort([5,2,8,9,4,2,1,7])

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