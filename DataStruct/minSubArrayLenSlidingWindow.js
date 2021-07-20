function minSubArrayLen(arr, value) {
     if(!arr.length) {
         return 0;
     }    
    for (let i = 0; i < arr.length; i++) {
            if(arr[i] >= value) {
                return 1;
            }
        }
    let number = 2;
    let max = 0
    while (number < arr.length) {
        for(let i =0; i < arr.length; i++) {
            if(i < number) {
                max += arr[i]
                if(max >= value) {
                    return number;
                }
            }
            else {
                max = max - arr[i - number] + arr[i]
                if(max >= value) {
                    return number;
                }
            }
        }
       max = 0;
       number++;
    }
    return 0;
}

// minSubArrayLen([2,3,1,2,4,3], 7);
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52);
// minSubArrayLen([2,1,6,5,4], 9);
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 95);
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 55);
// minSubArrayLen([4,3,3,8,1,2,3], 11)
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 39);
