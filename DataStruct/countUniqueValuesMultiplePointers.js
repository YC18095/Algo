function countUniqueValuesMPS (arr) {
    if(arr.length == 0) {
        return 0
    }
    
    let pointer1 = 0
    let pointer2 = pointer1 + 1
    let result = 1
    while(pointer2 <  arr.length) {
       if(arr[pointer1] !== arr[pointer2]) {
            pointer1 = pointer2
            result++;
       }
       pointer2++;
    }
    return result;
}

// countUniqueValuesMPS([-2,-1,-1,0,1])
countUniqueValuesMPS([])