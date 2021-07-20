function binarySearch(arr, value) {
    if(!arr.length) return 0
    let left = 0
    let right = arr.length - 1
    let middle = arr.length / 2
//     if(arr[middle] === value) return arr[middle]
    while (left < right) { 
        if(arr[middle] < value) {
            left = middle
        }
        else if(arr[middle] > value ) {
            right = middle
        }     
        else if(arr[middle] === value) {
            return middle
        }
         middle = Math.ceil((right + left) / 2)
    }
    return -1
}


binarySearch([1,3,4,5,6,8,10,11,21,22,23,55,66,88], 22)