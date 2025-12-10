const reverseString = (str) => {
  let strArray = str.split('');
  let reversedArray = strArray.reverse();
  let reversedString = reversedArray.join('');
  return reversedString;
};

console.log(reverseString('hello'));