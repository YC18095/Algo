
 function nextPermutationFunc(nums: number[]): number[] {
    if (!nums) return null;
    let p1: number = nums.length - 2;
    let p2: number = nums.length - 1;
    let obj: {} = {};
    obj[nums[p1]] = p1;
    obj[nums[p2]] = p2;
    let swapP1: number = 0;
    let swapP2: number = 0;
     // find the number to swap
    while (p1 >= 0) {
      if (nums[p1] > nums[p2] || nums[p1] === nums[p2]) {
        obj[nums[p1]] = p1;
      } else {
        swapP1 = p1;
        break;
      }
      p1--;
      p2--;
    }
  
   // if there is no permutation
    if (p1 === -1) {
      nums.sort((a, b) => a - b);
      return nums;
    }
  
     //swap two numbers
    let tempP1 = nums[swapP1];
    while (true) {
      tempP1 = tempP1 + 1;
      if (obj[tempP1]) {
        swapP2 = obj[tempP1];
        let temp = nums[swapP2];
        nums[swapP2] = nums[swapP1];
        nums[swapP1] = temp;
        break;
        }        
     }
     
   //sort
     for (let i = nums.length - 1; i > swapP1 + 1; i--) {
        for (let j = swapP1 + 1; j < i; j++) {
          if (nums[j] > nums[j + 1]) {
            let temp = nums[j];
            nums[j] = nums[j + 1];
            nums[j + 1] = temp;
          }
        }
      }
  
    return nums;
};
  