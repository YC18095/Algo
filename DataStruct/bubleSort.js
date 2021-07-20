function bubbleSort(arr) {
  if (!arr.length) return 0;
  let temp = 0;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

var data = Array.apply(null, { length: 10000 }).map(Function.call, Math.random);

bubbleSort(data);
// bubbleSort([14,33,27,10,35,19,42,44])
