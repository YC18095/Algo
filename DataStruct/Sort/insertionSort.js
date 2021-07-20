 function insertionSort (arr) {
    if(!arr.length) return 0
    let spliceTemp = null
    for(let i = 1; i < arr.length ; i++ ) {
       for(let j = 0 ; j < i; j++ ) {
           if(arr[i] < arr[j]) {
              spliceTemp = arr.splice(i, 1)
              arr.splice(j, 0, spliceTemp[0])
              break
           }
       }
    }
    return arr
}

//insertionSort([14,33,27,10,35,19,42,44])
insertionSort([5,3,4,1,2])