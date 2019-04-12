function remove(arr,item){
    var result = []
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] === item) continue;
        result.push(arr[i])
    }
    return result
}
function removeWithoutCopy(arr, item) {
    for (var i = arr.length-1; i >= 0; i--) {
        if(arr[i] === item)
            arr.splice(i,1)
    }
    return arr
}
