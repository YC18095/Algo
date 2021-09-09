/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    let divideReverseLength = Math.floor(matrix[i].length / 2);
    for (let j = 0; j < matrix[i].length; j++) {
      if (j < divideReverseLength) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[i][matrix[i].length - 1 - j];
        matrix[i][matrix[i].length - 1 - j] = temp;
      }
    }
  }
}
