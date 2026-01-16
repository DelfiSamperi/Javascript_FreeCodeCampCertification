const repeatStringNumTimes = (string, num) => {
  let newStr ="";
  if (num <= 0) {
    return newStr;
  } else {
    for (let i = 0 ; i < num ; i++) {
      newStr += string;
    }
    return newStr;
  }
};

console.log(repeatStringNumTimes('*', 3));