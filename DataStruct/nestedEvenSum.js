function nestedEvenSum (obj, max = 0) {
    let arr = Object.keys(obj)
    let i = 0
    while(i < arr.length) {
        if(typeof obj[arr[i]] === 'object') { //check is Object
             max += nestedEvenSum(obj[arr[i]])
        } 
        if(obj[arr[i]] % 2 == 0) {
            max += obj[arr[i]]
        }
        i++
    }
    return max;
}
nestedEvenSum({
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
}
)