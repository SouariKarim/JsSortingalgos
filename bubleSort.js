const arr1 = require('./arr');
// const bubleSort = (arr) => {
//   let sorted = true;
//   do {
//     sorted = true;
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i - 1] > arr[i]) {
//         [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
//         sorted = false;
//       }
//     }
//   } while (!sorted);
//   return arr;
// };

// console.log(bubleSort(arr1));

const bubleSort1 = (arr) => {
  let swapped = false;
  do {
    swapped = false; // this line is very important
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
};

console.log(bubleSort1(arr1));
