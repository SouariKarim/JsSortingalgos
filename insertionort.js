const arr1 = require('./arr');

const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    while (arr[i - 1] > arr[i]) {
      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      i--;
    }
  }
  return arr;
};

console.log(insertionSort(arr1));
