
function solution(A) {
    // Implement your solution here
    let obj = {};
    for(let i = 0; i < A.length; i ++) {
        if(!obj[A[i]] && (A[i] > 0) ) {
            obj[A[i]] = 1
        }
    }
    let i = 1
   while(true){
        if(!obj[i] && (i > 0)) {
            break;
        } else {
            i++
        }
    }

    return i
}

// solution([1, 3, 6, 4, 1, 2]) => 5
// solution([-1,-3])
// solution([1, 2, 3])
solution([-1,1,2])