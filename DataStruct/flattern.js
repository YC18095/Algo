function flatten (arr, index = 0,result =[]) {
   
    if(index === arr.length) return result 

    if(Array.isArray(arr[index])) {
       result =  result.concat(flatten(arr[index]))
    }
    else {
        result.push(arr[index])
    }
    
    return flatten (arr, ++index, result)
}

// flatten([1, 2, 3, [4, 5] ])
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])
flatten([1, [2, [3, 4], [[5]]]])