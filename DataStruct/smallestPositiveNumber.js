let smallest = (array) => {
  let i = 0;
  let temp = array[0];
  while (i < array.length) {
    if (0 < array[i] && array[i] < temp) {
      temp = array[i];
    }
    i++;
  }
  if (temp < 0) temp = -1;
  return temp;
};

let array = [2, -2, 3, 4, -5, 6];
let array1 = [-21, -2, -3, -4, -5];

smallest(array);
