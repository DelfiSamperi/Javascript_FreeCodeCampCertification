const frankenSplice = (arr1, arr2, num) => {
  let arr3 = [...arr2];
  arr3.splice(num, 0, ...arr1);
  console.log(arr2, arr1, num,arr3);
  return arr3;
};

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
//[4, 1, 2, 3, 5].
console.log(frankenSplice([1, 2], ["a", "b"], 1));
//["a", 1, 2, "b"].
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
//["head", "shoulders", "claw", "tentacle", "knees", "toes"].