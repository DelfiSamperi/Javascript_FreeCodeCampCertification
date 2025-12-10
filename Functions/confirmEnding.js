let str1 = 'Hello World';
let str2 = 'World';

const confirmEnding = (str1, str2) => {
  //str1.endsWith(str2, str1.length) ? true : false;
  let substr = str1.slice(-str2.length);
  console.log(str1, str2, substr);
  if(substr === str2) {
    return true;
  } else {return false};
};

console.log(confirmEnding('Hello World','World'));