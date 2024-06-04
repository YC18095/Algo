function countingNumber (arr) {
    let obj = {}
    for (let i = 0; i < arr.length ; i++) {
        if(obj[arr[i]] === undefined) {
            obj[arr[i]] = 1
        } else {
            obj[arr[i]] += 1
        }
    }

    let result = []
    for (let key in obj) {
        let numer = Number(key)
       result.push([numer, obj[key], obj[key] * numer])
    }
    return result;
}

countingNumber([1,2,3,5,7,2,1,3,6,9])