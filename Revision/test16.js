var isLongPressedName = function (name, typed) {
  let map1 = new Map(),
    n = typed.length;
  for (let i = 0; i < n; i++) {
    map1.set(typed[i], 1 + (map1.get(typed[i]) || 0));
  }

  let map2 = new Map(),
    m = name.length;
  for (let i = 0; i < m; i++) {
    map2.set(name[i], 1 + (map2.get(name[i]) || 0));
  }
  //   console.log(map1)
    console.log(map2)
  for (let key of map2.keys()) {
    console.log(key);
    if (!map1.has(key) || map1.get(key) < map2.get(key)) return false;
  }
  return true;
};

console.log(isLongPressedName("saeed", "ssaaedd"));
