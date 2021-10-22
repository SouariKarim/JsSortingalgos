const arr1 = require('./arr');

const countingSort = (arr) => {
  let count = Array(1000).fill(0);
  for (let num of arr) {
    count[num]++;
  }
  let finalArr = [];
  for (let i = 0; i < count.length; i++) {
    finalArr.push(...Array(count[i]).fill(i));
  }
  return finalArr;
};

console.log(countingSort(arr1));
