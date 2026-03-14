const pairElement = (str) => {
  let newArr = [];
  for(let i = 0 ; i < str.length ; i++) {
    
    if(str[i] === 'A') newArr.push(['A','T']);
    if(str[i] === 'T') newArr.push(['T','A']);
    if(str[i] === 'C') newArr.push(['C','G']);
    if(str[i] === 'G') newArr.push(['G','C']);
  };
  return newArr;  
};

console.log(pairElement("ATCGA"));
//[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
console.log(pairElement("TTGAG"));
//[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
console.log(pairElement("CTCTA"));
//[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]