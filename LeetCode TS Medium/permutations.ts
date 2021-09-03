function permute(nums: number[]): number[][] {
  let result: number[][] = backTracking(nums, [], []);
  return result;
}

function backTracking(nums: number[], result: number[][], array: number[]) {
  if (array.length === nums.length) {
    result.push([...array]);
    return;
  }

  for (let i: number = 0; i < nums.length; i++) {
    if (!array.includes(nums[i])) {
      array.push(nums[i]);
      backTracking(nums, result, array);
      array.pop();
    }
  }
  return result;
}
