const fearNotLetter = (str) => {
  const abc = "abcdefghijklmnopqrstuvwxyz";
  const abcArr = abc.split("");

  const strArr = str.split("");
  const firstIndex = strArr[0];
  console.log(firstIndex);
  const abcFirstIndex = abc.indexOf(firstIndex);
  console.log(abcFirstIndex);

  let missingLetter = "";
  let newStr = [];

  for(let i = 0 ; i < strArr.length ; i++) {
    if(strArr[i] === abcArr[abcFirstIndex + i]) {
      newStr.push(strArr[i]);
      console.log(newStr);
    } else {
      missingLetter = abcArr[abcFirstIndex + i];
      return "The missing letter is " + missingLetter;
      //return missingLetter;
    }
    
  };
  return undefined;


};

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));