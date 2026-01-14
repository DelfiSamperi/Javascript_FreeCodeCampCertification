const num =  Math.floor(Math.random() * 20) + 1;
//const num = 5;

const factorialCalculator = (num) => {
  let result = 1;

  for(let i = 2 ; i <= num ; i++) {
    result = result * i;
  }
  
  /*
  let i = 2;
  while(i <= num){
    result = result * i;
    i++;
  }*/

  return result
};

//console.log(factorialCalculator(5))
const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${ num} is ${ factorial}`;
console.log(resultMsg);
// 5 -> 5 * 4 * 3 * 2 * 1 = 120
// 3 -> 3 * 2 * 1 = 6