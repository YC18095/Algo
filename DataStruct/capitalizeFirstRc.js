function capitalizeFirst(arr,index = 0) {
    if(arr.length === 0) return null    
    let temp = ''
    if(index >= arr.length) return arr
    temp = arr[index]
    temp = temp[0].toUpperCase() + temp.slice(1)
    arr[index] = temp
    return capitalizeFirst(arr, ++index)
}

// capitalizeFirst(['ttt','abcs','qwe'])
capitalizeFirst([])