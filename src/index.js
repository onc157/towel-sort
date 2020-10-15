
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  for (let i = 0; i < matrix.length; i = i + 1) {
    if (i % 2 !== 0) {
      matrix[i].reverse();
    }
  }
  let matrixReverse = matrix.reduce((acc, item) => acc.concat(item), []);
  return matrixReverse;
}
