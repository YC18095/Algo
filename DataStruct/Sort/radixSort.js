function getDigit(num, place) {
     return Math.floor((num / Math.pow(10, place)) % 10);
}

// getDigit(12345, 2)

function getCountDigit(num) {
    if(num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

// getCountDigit(345)

function maxDigits(numsArray) {
    if(!numsArray.length) return 0
    let maxDigitNumber = 0
    for(let i = 0; i< numsArray.length; i++) {
        maxDigitNumber = Math.max(maxDigitNumber,getCountDigit(numsArray[i]))
    }
    return maxDigitNumber
}


// maxDigits([123,456,123131])

function radixSort(arrayNumber) {
    if(!arrayNumber.length) return 0
    let listArray = arrayNumber
    let listArray1 = []
    let maxDigitNumber = maxDigits(listArray)
    for(let i = 0; i <= maxDigitNumber; i++) {
        let buckets = Array.from({length: 10}, ()=> [])
        for(let j = 0; j < listArray.length ; j++ ) {            
             let number = getDigit(listArray[j], i)
             buckets[number].push(listArray[j])
        }
//         listArray = []
//         listArray = listArray.concat(...buckets)
        listArray = [] // this need to modifield the entrance because it use the sortted array to keep going sortted until the end, could not take the new array to sortted
//Radix sort perhaps need to modifield the entrance
        for(let k = 0 ; k < buckets.length; k ++) {
            listArray = listArray.concat(buckets[k])
        }
             
    }
    return listArray
}

radixSort([123,4563,8902,342567,2,5,56,234,7856,1436,364575467])