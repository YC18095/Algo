//countUniqueValues using fequency counter

function countUniqueValues(arr) {
    if(arr.length == 0) {
        return 0
    }
    let Object1 = {}
    for(let val of arr) {
        Object1[val] = (Object1[val] || 0 ) + 1
    }
    return Object.keys(Object1).length
}


// countUniqueValues([1,1,1,1,2])
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])
// countUniqueValues([])
// countUniqueValues([-2,-1,-1,0,1])