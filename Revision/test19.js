function solve(str) {
  let i = 0,
    j = 0,
    map = new Map(),
    maxLen = 0;
  while (j < str.length) {
    if (!map.has(str[j])) {
      map.set(str[j], j);
    } else {
        let index =map.get(str[j])
      if ( index>= i && index<j ) {
        i++;
      }
      map.set(str[j], j);
    }

    maxLen = Math.max(maxLen, j - i + 1);
    j++;
  }

  return maxLen;
}

console.log(solve("pwwkew"));
