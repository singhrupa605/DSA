// const fs = require("fs");
// let idx = 0;
// function storeGraph() {
//   const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);
//   let n = input[idx++];
//   let m = input[idx++];
//   let adMatrix = Array.from({ length: n }, () => Array(n).fill(0));
//   for (let i = 0; i < m; i++) {
//     let u = input[idx++];
//     let v = input[idx++];
//     adMatrix[u][v] = 1;
//     adMatrix[v][u] = 1;
//   }
// }
// storeGraph();

const fs = require("fs");

function storeGraphII() {
  let idx = 0;
  const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number)
  let n = input[idx++];
  let m = input[idx++];
  let adMat = Array.from({ length: n + 1 }, () => []);
  for (let i = 0; i < m; i++) {
    let u = input[idx++];
    let v = input[idx++];
    adMat[u].push(v);
    adMat[v].push(u);
  }
  console.log(adMat)
}

storeGraphII()