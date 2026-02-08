const titleCase = (str) => {
  const words = str.toLowerCase().split(' ');
  let newStr = [];
  console.log(words);
  for (let i = 0 ; i < words.length ; i++) {
     newStr.push(words[i][0].toUpperCase() + words[i].slice(1));
  };
  return newStr.join(' ');
};

/*
const titleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};
*/
console.log(titleCase("I like to code")); //"I Like To Code".
console.log(titleCase("javaScript is fun")); //"Javascript Is Fun"
