const twoSum = function(nums, target) {
   let p1 = 0
    let p2 = 1;
  while (true) {
      if(nums[p1] + nums[p2] === target) {
          return [p1, p2]
      } else {
          p2++
        if(p2 == nums.length) {
          p1 += 1
          p2 = p1 + 1
          }
      }
   
  }
};

// twoSum([3,2,4], 6)
// twoSum([2,7,11,15], 9)
// twoSum([3,3], 6)
