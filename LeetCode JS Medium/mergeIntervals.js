/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (!intervals || intervals.length === 1) return intervals;
  let j = 0;
  intervals.sort((a, b) => a[0] - b[0]);
  let pivot = [[...intervals[0]]];
  for (let i = 1; i < intervals.length; i++) {
    if (pivot[j][1] >= intervals[i][0]) {
      let TempArray = pivot[j].concat(intervals[i]);
      TempArray.sort((a, b) => a - b);
      pivot[j][0] = TempArray[0];
      pivot[j][1] = TempArray[TempArray.length - 1];
    } else {
      pivot.push([...intervals[i]]);
      j++;
    }
  }
  return pivot;
};

// merge([[1,4], [0,4]])
// merge([[1,4],[4,5]])
// merge([[1,3],[2,6],[8,10],[1,18]])
merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]);
