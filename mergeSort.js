const arr1 = require('./arr');

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr; // this is the base case very important less or equal

  let mid = Math.floor(arr.length / 2);
  let firstPart = arr.splice(0, mid); // after this the rest of the arr is only the half because there is a splice ; it is the right part of the original array
  firstPart = mergeSort(firstPart); // continue on deviding the first part
  arr = mergeSort(arr); // continue deviding the right part of the arr

  let wholeArr = [];
  while (arr.length !== 0 && firstPart.length !== 0) {
    if (arr[0] < firstPart[0]) {
      wholeArr.push(arr[0]);
      arr.shift(); // remove the first item of the arr
    } else {
      wholeArr.push(firstPart[0]);
      firstPart.shift();
    }
  }
  return wholeArr.concat(firstPart).concat(arr);
};

console.log(mergeSort(arr1));
