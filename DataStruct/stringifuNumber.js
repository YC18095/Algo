function stringifyNumber(obj,objTemp = obj) {
   for(let key in obj) {
       if(Number.isFinite(obj[key])) {
           obj[key] = obj[key].toString()
       }
        if(typeof obj[key] == 'object' && !Array.isArray(obj[key])) { 
            return stringifyNumber(obj[key], objTemp)
        }
   }
return objTemp
}


stringifyNumber({
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
})