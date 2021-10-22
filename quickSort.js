const arr1 = require('./arr');
const h = [1, 2];
const b = [3, 4];

const quickSort = (arr) => {
  const hello = arr.length;
  if (hello <= 1) return arr; // this is the base case an array with one element is already sorted
  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    }

    if (arr[i] > pivot) {
      rightArr.push(arr[i]);
    }
  }

  return quickSort(leftArr).concat(pivot).concat(quickSort(rightArr));
  // console.log('hello there');
  // return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

console.log(quickSort(arr1));
