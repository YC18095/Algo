function stringifyNumbers(obj, objTemp = {}) {
    let arr = Object.keys(obj)
    let i = 0
    while(i < arr.length) {
        if(typeof obj[arr[i]] === 'object' && !Array.isArray(obj[arr[i]])) { //check is Object and key : value is not Array
            objTemp[arr[i]] = stringifyNumbers(obj[arr[i]],{})
        } else if(typeof obj[arr[i]] === 'number') {
            objTemp[arr[i]] = obj[arr[i]].toString();
        } else {
            objTemp[arr[i]] = obj[arr[i]];
        }
        i++
    }
    return objTemp;
}

// stringifyNumber({a: 1, b:{c: 'c', f: 2},d: {e: 3}})
stringifyNumber( {
    a: 2,
    e: {e: {g: 2}, ee: 'dog'}
})