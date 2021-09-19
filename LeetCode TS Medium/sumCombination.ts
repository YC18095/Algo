function backTrackingSumCom(
  arr: number[],
  candidates: number[],
  target: number,
  index: number,
  result: number[][] = []
): number[][] {
  if (target < 0) {
    return;
  }
  if (target === 0) {
    result.push([...arr]);
    return;
  }

  for (let i = index; i < candidates.length; i++) {
    arr.push(candidates[i]);
    backTrackingSumCom(
      arr,
      candidates,
      target - candidates[i],
      i,
      result || []
    );
    arr.pop();
  }
  return result;
}

function combinationSum(candidates: number[], target: number): number[][] {
  let result: number[][] = backTrackingSumCom([], candidates, target, 0, []);
  return result;
}
