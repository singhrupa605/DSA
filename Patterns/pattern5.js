const print = (n) => {
  for (let i = 0; i < 2 * n; i++) {
    if (i === 0) {
      for (let j = 0; j < 2 * n - 1; j++) {
        process.stdout.write("* ");
      }
      console.log()
    } else if (i < n) {
      for (let j = 0; j < n - i; j++) {
        process.stdout.write("* " );
      }
      for (let j = 0; j < 2 * i - 1; j++) {
        process.stdout.write("  ");
      }
      for (let j = 0; j < n - i; j++) {
        process.stdout.write(" *");
      }
      console.log();
    } else if (i >= 2 * n-1) {
      for (let j = 0; j < 2 * n - 1; j++) {
        process.stdout.write(" *");
      }
      console.log()
    } else {
      for (let j = 0; j < i-n+1; j++) {
        process.stdout.write("* ");
      }
      for (let j = 0; j < (4*n-2*i-3); j++) {
        process.stdout.write("  ");
      }
      for (let j = 0; j < i-n+ 1; j++) {
        process.stdout.write(" *");
      }
      console.log()
    }
  }
};

print(5);
