function FAND(vec) {
  let mis = [];
  for (let i = 0; i < vec.length; i++) {
    let temp = Math.abs(vec[i]) - 1;
    vec[temp] = vec[temp] > 0 ? -vec[temp] : vec[temp];
  }
  for (let i = 0; i < vec.length; i++) {
    if (vec[i] > 0) mis.push(i + 1);
  }
  return mis;
}

FAND([4, 3, 2, 7, 8, 2, 3, 1]);
