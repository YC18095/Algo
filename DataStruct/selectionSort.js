function selectionSort(arr) {
  if (!arr.length) return 0;
  let indexTemp = 0;
  let valueTemp = 0;
  for (let i = 0; i < arr.length; i++) {
    valueTemp = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (valueTemp > arr[j]) {
        valueTemp = arr[j];
        indexTemp = j;
      }
    }
    if (valueTemp != arr[i]) {
      let temp = arr[indexTemp];
      arr[indexTemp] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

selectionSort([14, 33, 27, 10, 35, 19, 42, 44]);
