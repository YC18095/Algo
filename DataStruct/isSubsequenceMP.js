function isSubsequenceMP(str1, str2) {
    i = 0
    j = 0
    while (j <str2.length) {
        if(str1[i] === str2[j]) {
            i++
        }
        j++
    }
    if(i === str1.length) {
        return true
    }

//     if(i < str1.length) {
//         return false
//     }
    return false
}

// isSubsequenceMP('hello', 'hello world')
// isSubsequenceMP('sing', 'string')
isSubsequenceMP('abc', 'acb')