// run time 94,32 ms memory
var jump = function (nums) {
  let i = 0;
  let result = 0;
  let max = 0;
  if (nums.length === 1) return 0;
  if (nums.length === 2) return 1;
  while (true) {
    if (i < nums.length - 1) {
      result = result + 1;
      if (nums[i] >= nums.length - 1) break;
      let range = i + nums[i];
      let iTemp = i + 1;
      while (iTemp <= range) {
        let valueTemp = iTemp + nums[iTemp];
        if (max < valueTemp) {
          max = valueTemp;
          i = iTemp;
          if (valueTemp >= nums.length - 1) {
            result = result + 1;
            i = valueTemp;
            break;
          }
        }
        iTemp++;
      }
    } else {
      break;
    }
  }
  return result;
};

//Optimize runtime
// var jump = function (nums) {
//   let i = 0;
//   let result = 0;
//   let max = 0;
//   if (nums.length === 1) return 0;
//   if (nums.length === 2) return 1;

//   while (i < nums.length - 1) {
//     result += 1;
//     if (nums[i] >= nums.length - 1) break;
//     let range = i + nums[i];
//     let iTemp = i + 1;

//     while (iTemp <= range) {
//       if (max < iTemp + nums[iTemp]) {
//         max = iTemp + nums[iTemp];
//         i = iTemp;
//         if (iTemp + nums[iTemp] >= nums.length - 1) {
//           result += 1;
//           i = iTemp + nums[iTemp];
//           break;
//         }
//       }
//       iTemp++;
//     }
//   }
//   return result;
// };

// jump([3,5,2,1,4,6,2])
// jump([2,3,1,1,4])
// jump([2,2,2,2])
// jump([2,3,1,1,4])
jump([2, 3, 1]);
// jump([3,2,1])
// jump([1,2,3])
