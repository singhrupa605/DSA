const matrix = [
  [1, 1, 1, 0],
  [1, 0, 1, 1],
  [0, 1, 1, 1],
];

var setZeroes = function (matrix) {
  let rows = matrix.length,
    cols = matrix[0].length,
    firstRowZero = false,
    firstColZero = false;
  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) {
      firstColZero = true;
      break;
    }
  }

  for (let j = 0; j < cols; j++) {
    if (matrix[0][j] === 0) {
      firstRowZero = true;
      break;
    }
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }
  //   console.log(matrix)
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if (firstColZero) {
    for (let i = 0; i < rows; i++) {
      matrix[i][0] = 0;
    }
  }

  if (firstRowZero === true) {
    for (let j = 0; j < cols; j++) {
      matrix[0][j] = 0;
    }
  }

}

setZeroes(matrix);
