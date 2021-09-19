/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// not a good solution cause the time exceed
var uniquePaths = function (arr) {
  let result = recursive(
    arr,
    0,
    0,
    (bigM = arr.length - 1),
    (bigN = arr[0].length - 1)
  );
  return result;
};

var recursive = function (arr, m, n, bigM, bigN) {
  if (bigM === m && bigN === n) return arr[m][n];
  if (bigM < m || bigN < n) return;

  let left = recursive(arr, m, n + 1, bigM, bigN);
  let right = recursive(arr, m + 1, n, bigM, bigN);

  if (left < right || left === right || (!right && left >= 0)) {
    return left + arr[m][n];
  }
  if (right < left || (right >= 0 && !left)) {
    return right + arr[m][n];
  }
};

//  uniquePaths([[1,3,1], [1,5,1], [4,2,1]])
// uniquePaths([[0,1],[1,0]])
uniquePaths([
  [5, 0, 1, 1, 2, 1, 0, 1, 3, 6, 3, 0, 7, 3, 3, 3, 1],
  [1, 4, 1, 8, 5, 5, 5, 6, 8, 7, 0, 4, 3, 9, 9, 6, 0],
  [2, 8, 3, 3, 1, 6, 1, 4, 9, 0, 9, 2, 3, 3, 3, 8, 4],
  [3, 5, 1, 9, 3, 0, 8, 3, 4, 3, 4, 6, 9, 6, 8, 9, 9],
  [3, 0, 7, 4, 6, 6, 4, 6, 8, 8, 9, 3, 8, 3, 9, 3, 4],
  [8, 8, 6, 8, 3, 3, 1, 7, 9, 3, 3, 9, 2, 4, 3, 5, 1],
  [7, 1, 0, 4, 7, 8, 4, 6, 4, 2, 1, 3, 7, 8, 3, 5, 4],
  [3, 0, 9, 6, 7, 8, 9, 2, 0, 4, 6, 3, 9, 7, 2, 0, 7],
  [8, 0, 8, 2, 6, 4, 4, 0, 9, 3, 8, 4, 0, 4, 7, 0, 4],
  [3, 7, 4, 5, 9, 4, 9, 7, 9, 8, 7, 4, 0, 4, 2, 0, 4],
  [5, 9, 0, 1, 9, 1, 5, 9, 5, 5, 3, 4, 6, 9, 8, 5, 6],
  [5, 7, 2, 4, 4, 4, 2, 1, 8, 4, 8, 0, 5, 4, 7, 4, 7],
  [9, 5, 8, 6, 4, 4, 3, 9, 8, 1, 1, 8, 7, 7, 3, 6, 9],
  [7, 2, 3, 1, 6, 3, 6, 6, 6, 3, 2, 3, 9, 9, 4, 4, 8],
]);
//  uniquePaths([[1,2,3],[4,5,6]])
