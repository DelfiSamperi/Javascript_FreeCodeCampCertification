arr1 = [
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
];

arr2 = [
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1]
];

arr3 = [
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10]
];

const largestOfAll = (arr) => {
  let largestArr = [];
  
  for (let i = 0 ; i < arr.length ; i++) {
    let largestNum = arr[i][0];

    for (let j = 0 ; j < arr[i].length ; j++ ) {
      if (arr[i][j] > largestNum) {
        largestNum = arr[i][j];
      }
    };

    largestArr.push(largestNum);
  };
  return largestArr;
};

console.log(largestOfAll(arr1)); // [27, 5, 39, 1001].
console.log(largestOfAll(arr2)); // [9, 35, 97, 1000000].
console.log(largestOfAll(arr3)); // [25, 48, 21, -3]