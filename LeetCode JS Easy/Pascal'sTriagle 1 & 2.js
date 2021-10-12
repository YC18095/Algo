var getRow = function(rowIndex) {
    let array = []
    let result = []
    
    if(rowIndex === 1) return [[1]]

    if(rowIndex === 2) return [[1],[1,1]]

    for(let i = 0; i <= rowIndex ; i++) {
        array.push(1)     
        for(let j = array.length - 2; j > 0  ; j--) {
            array[j] += array[j - 1]
        }
        result[i] = [...array]
    }
    return result
};

getRow(3)
