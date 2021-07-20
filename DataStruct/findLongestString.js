function findLongestString (string, length = 0) {
    if(!string.length) return null
    let tempString = string
    let tempObject = {}
    for(let i = 0; i < string.length; i++) {
        var char = tempString[i];
        if(tempObject[char] === undefined ) {
            tempObject[tempString[i]] = i
        }
        else {
            if(length < Object.keys(tempObject).length) {
                length = Object.keys(tempObject).length
            }
            i = tempObject[tempString[i]]
            tempObject = {}
        }
    }
    if(length < Object.keys(tempObject).length) {
                length = Object.keys(tempObject).length
       }
    return length
}

findLongestString('Rithmschool123456789')