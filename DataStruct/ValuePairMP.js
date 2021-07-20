function averagePairMP(arr, averageNum) {
    if(arr.length == 0) {
        return false
    }
    let i = 0
    let j = arr.length - 1
    while(i < j) {
        if(((arr[i] + arr[j]) / 2) > averageNum ) {
            j--
        }
        else if(((arr[i] + arr[j]) / 2) < averageNum ) {
            i++
        }
        else  {
            return true
        }
    }
    return false
}

averagePairMP([1,2,3],2.5)