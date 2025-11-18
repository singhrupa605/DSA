const print = (n) => {
  counter = 0;
  for (let i = 0; i < n * 2; i++) {
    if (i < n) {
      for (let j = 0; j < n - i - 1; j++) {
        process.stdout.write(" ");
      }
      for (let j = 0; j < 2 * i + 1; j++) {
        process.stdout.write("*");
      }
      for (let j = 0; j < n - i - 1; j++) {
        process.stdout.write(" ");
      }

      console.log();
    }
    else
    {
        for (let j = 0; j < i-n+1 ; j++) {
        process.stdout.write(" ");
      }
      for (let j = 0; j < (n*2-i)+2; j++) {
        process.stdout.write("*");
      }
      for (let j = 0; j < i-n+1; j++) {
        process.stdout.write(" ");
      }
      console.log();
    }
  }
};

print(5);
