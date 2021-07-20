/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result = null;
  for (let i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return (result = [i, j]);
      }
    }
  }

  if (result && result[0] && result[1]) return result;
  else return 'No twoSum';
};

twoSum([3, 2, 4], 6);
