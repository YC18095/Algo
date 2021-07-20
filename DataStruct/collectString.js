function collectString (obj, arrTemp = []) {
    let arr = Object.keys(obj)
    let i = 0
    while(i < arr.length) {
        if(typeof obj[arr[i]] === 'object') { //check is Object
            arrTemp = arrTemp.concat(collectString(obj[arr[i]]))
        } 
        if(typeof obj[arr[i]] === 'string') {
           arrTemp.push(obj[arr[i]])
        }
        i++
    }
    return arrTemp;
}
collectString({
    a: 'keys',
    b: {b: 'l', bb: {b: 'k', bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
}
)