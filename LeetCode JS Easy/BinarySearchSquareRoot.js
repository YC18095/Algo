function binarySearchSquareRoot(value) {
  if (!value) return 0;
  let left = 0;
  let right = value;
  let countStep = 0;
  while (left < right) {
    countStep++;
    let middle = (left + right) / 2;
    if (middle * middle < value) {
      left = middle;
    } else if (middle * middle > value) {
      right = middle;
    } else {
      console.log(countStep);
      return (result = parseFloat(middle.toFixed(3)));
    }
  }
}

// binarySearchSquareRoot(4)
binarySearchSquareRoot(2);
