const chunkArrayInGroups = (arr, num) => {
  let bigArr = [];
  
  for(let i = 0 ; i < arr.length ; i+=num) {
    
    let newArr = [];
    
    for(let j = i ; j < i + num && j < arr.length; j++) {
      newArr.push(arr[j]);
    }
    
    bigArr.push(newArr);
  }
  
  return bigArr;
};

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));