/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSumJs = function (candidates, target) {
  let result = backTracking((arr = []), candidates, target, 0, []);
  return result;
};

function backTrackingJs(arr, candidates, target, index, result = []) {
  if (target < 0) {
    return;
  }
  if (target === 0) {
    result.push([...arr]);
    return;
  }

  for (let i = index; i < candidates.length; i++) {
    arr.push(candidates[i]);
    backTracking(arr, candidates, target - candidates[i], i, result || []);
    arr.pop();
  }
  return result;
}

// combinationSum([2,3,6,7],7)
combinationSumJs([2], 1);
