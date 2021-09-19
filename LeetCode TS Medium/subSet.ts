function subsets(nums: number[]): number[][] {
  let result: {} = backTracking(nums, {}, 0, []);
  let array: number[][] = [[]];
  for (let key in result) {
    array.push(result[key]);
  }
  return array;
}

var backTracking = function (
  nums,
  result,
  index: number,
  queu: number[] = []
): {} {
  for (let i = index; i < nums.length; i++) {
    queu.push(nums[i]);
    if (!result[queu.toString()]) {
      result[queu.toString()] = [...queu];
    }
    backTracking(nums, result, i + 1, queu);
    queu.pop();
  }
  return result;
};

subsets([1, 2, 3]);
// subsets([0])
