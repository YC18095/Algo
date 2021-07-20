function anagrams (string1, string2) {
    if(string1.length != string2.length) {
        console.log('length is not equal')
        return false
    }
    var object1={}
    var object2={}
    for(let val of string1.split('')) {
        object1[val] = (object1[val] || 0 ) + 1
    }
    for(let val of string2.split('')) {
        object2[val] = (object2[val] || 0 ) + 1
    }
   for(let key in object1) {
       if(!(key in object2)) {
           console.log('you dont have this key in string2:', key)
           return false
       }
       if(object1[key] != object2[key]) {
           console.log('the quantity of alphabet string1 and 2 does not consistent ')
           return false
       }
   }
   console.log('quantity of characters are true')
   return true
}

// anagrams('str','str')
anagrams('rat','car')