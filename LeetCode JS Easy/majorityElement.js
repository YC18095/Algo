/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let a = nums.sort();
  return a[Math.floor(nums.length / 2)];
};

majorityElement([1, 4, 1, 2, 2, 1, 3, 2, 3, 1, 2, 1, 1, 1, 1]);
