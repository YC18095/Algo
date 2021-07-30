function letterCombinations(digits: string): string[] {
    if(!digits) return []
    let phone: {} = {
        "2": ["a","b", "c"],
        "3": ["d","e", "f"], 
        "4": ["g","h", "i"],
        "5": ["j","k", "l"],
        "6": ["m","n", "o"],
        "7": ["p","q", "r", "s"],
        "8": ["t","u", "v"],
        "9": ["w","x", "y", "z"]
    }
  
    let stringArray: string[] = digits.split('')
    let arrayResult: string[] = []
    
    while(stringArray.length !== 0 ) {
        if(!arrayResult.length) {
          arrayResult = phone[stringArray[0]]
          stringArray.shift()   
        } else {
  
            let stringTemp = stringArray.shift()
            let arrayTemp1 = [...arrayResult]
            arrayResult = []
          
            for(let i = 0; i < arrayTemp1.length; i++) {
               for(let j = 0; j < phone[stringTemp].length ; j++) {
                arrayResult.push(arrayTemp1[i]+phone[stringTemp][j])
               }
          }
          
        if(!stringArray.length) break
        }
    }
    return arrayResult
  
  };
  