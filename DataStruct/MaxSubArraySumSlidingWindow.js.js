function slidingWindow (arr, num) {
     let max = 0;
    let temp = 0;
    if(!arr.length || (arr.length < num)) {
     return null;
    }
    for(let i = 0 ; i < arr.length; i ++){
        if(i<num){
            max += arr[i];
            temp = max;
        }
        else {
           temp = temp - arr[i - num] + arr[i];
            if(max < temp) {
                max = temp;
            }
        }
    }
    return max;
}

// slidingWindow([1,2,5,2,8,1,5], 3)
// slidingWindow([], 3)
// slidingWindow([4,2,1,6,2], 4)
slidingWindow([1,2,5,2,8,1,5], 2)