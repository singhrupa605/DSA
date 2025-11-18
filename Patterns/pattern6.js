const print = (n) => {
  for (let i = 1; i < 2 * n; i++) {
    if (i <= n) {
      for (let j = 1; j <= i; j++) {
        process.stdout.write("*");
      }
      for (let j = i + 1; j <= 2 * n - i; j++) {
        process.stdout.write(" ");
      }
      for (let j = 1; j <= i; j++) {
        process.stdout.write("*");
      }

      console.log();
    } else {
      for (let j = 1; j <= 2 * n - i; j++) {
        process.stdout.write("*");
      }
      for (let j = 1; j <= 2 * (i - n); j++) {
        process.stdout.write(" ");
      }
      for (let j = 1; j <= 2 * n - i; j++) {
        process.stdout.write("*");
      }
       console.log();
    }
   
  }
};

print(5);
