function mergeSort(arr, arrTemp = arr) {
    if(!arr.length) return 0
    if(arrTemp.length <= 1) return arrTemp
    let middleIndex = Math.floor(arrTemp.length / 2)
    let left = mergeSort(arr, arrTemp.slice(0, middleIndex))
    let right = mergeSort(arr, arrTemp.slice(middleIndex))
    return mergingArray(left, right)
}

function mergingArray(arr1, arr2) {
    let arrTemp = []
    let arr = []
    let i = 0
    let j = 0
    while(i < arr1.length && j < arr2.length ) {
        if(arr1[i] < arr2[j]) {
            arrTemp.push(arr1[i])
            i++
        }
         else if(arr1[i] > arr2[j]) {
            arrTemp.push(arr2[j])
             j++
        }
    }
     i !== arr1.length ? arr = arrTemp.concat(arr1.slice(i)) :null
     j !== arr2.length ? arr = arrTemp.concat(arr2.slice(j)): null
     return arr
}

mergeSort([4,2,5,7])