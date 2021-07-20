function mergingArray(arr1, arr2) {
  let arrTemp = [];
  let arr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arrTemp.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      arrTemp.push(arr2[j]);
      j++;
    }
  }
  if (i !== arr1.length) {
    arr = arrTemp.concat(arr1.slice(i));
  } else if (j !== arr2.length) {
    arr = arrTemp.concat(arr2.slice(j));
  }
  return arr;
}

// mergingArray([1,3,9,10,11], [2,4,7,8])
mergingArray([1, 3, 9, 11], [2, 4, 7, 8, 10, 13, 15]);
