/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

function uniquePaths(m: number, n: number): number {
  let bigM: number = m - 1;
  let bigN: number = n - 1;
  let result = recursive(0, 0, bigM, bigN);
  return result;
}

var recursive = function (
  m: number,
  n: number,
  bigM: number,
  bigN: number
): number {
  if (bigM === m && bigN === n) return 1;
  if (bigM < m || bigN < n) return 0;
  let result: number =
    recursive(m, n + 1, bigM, bigN) + recursive(m + 1, n, bigM, bigN);
  return result;
};

uniquePaths(10, 9);
