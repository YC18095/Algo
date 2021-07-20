function findPivotIndex(arr ,left = 0 ,right = arr.length) {
   if(!arr.length) return 0
   let pivot = arr[right]
   let j = right - 1
   let i = right
   let temp = 0
   while (j >= left ) {             
       if(arr[j] >= pivot) {
           i--
           temp = arr[j]
           arr[j] = arr[i] 
           arr[i] = temp
       }
       j--
   } 
   if(i !== right){
     temp = arr[right]
     arr[right] = arr[i]
     arr[i] = temp
   }
    let indexPivot = arr.indexOf(pivot) 
   return indexPivot
}


function quickSort(arr, left = 0, right = arr.length - 1) {
      if(right - left < 1) return arr
     let indexOfPivot = findPivotIndex(arr, left, right)
     quickSort(arr, left, indexOfPivot - 1)
     quickSort(arr, indexOfPivot + 1, right)
     return arr
}

// quickSort([10,7,12,6,3,2,8])
quickSort([14,33,27,10,35,19,44,42,41,14,39])