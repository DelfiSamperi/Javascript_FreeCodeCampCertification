const sumAll = (arr) =>  {
  let sum = 0;
  if(arr[0] < arr[1]) {
    for(let i = arr[0] ; i <= arr[1] ; i++) {
      sum += i;
    };
  } 
  if(arr[0] > arr[1]) {
    for (let i = arr[0] ; i >= arr[1] ; i--) {
      sum += i;
    }
  }
  return sum;
};

console.log(sumAll([1, 4])) //1 + 2 + 3 + 4 = 10.
console.log(sumAll([4, 1])) //4 + 3 + 2 + 1 = 10.
console.log(sumAll([5, 10])) //5 + 6 + 7 + 8 + 9 + 10 = 45.
console.log(sumAll([10, 5])) //10 + 9 + 8 + 7 + 6 + 5 = 45.