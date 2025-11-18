const print = (n) => {
  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(`${j}`);
    }

    for (let j = i+1; j <= 2 * n-i; j++) {
      process.stdout.write(" ");
    }
    for (let j = i; j >= 1; j--) {
      process.stdout.write(`${j}`);
    }

    console.log();
  }
};

print(4);
