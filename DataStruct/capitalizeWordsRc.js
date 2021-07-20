function capitalizeWords(arr,index = 0, temp = []) {
    if(arr.length === 0) return null    
    if(index >= arr.length) return temp
    temp[index] = arr[index]
    temp[index] = temp[index].toUpperCase()
    return capitalizeWords(arr, ++index, temp)
}

capitalizeFirst(['ttt','abcs','qwe'])
// capitalizeFirst([])