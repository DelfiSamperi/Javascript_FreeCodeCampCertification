let year = 2024; //2024, 1900, 2000

const isLeapYear = (num) => {
  if(num%4 === 0) {
    if((num % 100 === 0 && num % 400 === 0) || (num % 100 !== 0 && num % 400 !== 0)) {
      return `${num } is a leap year.`
    } else {
      return `${num } is not a leap year.`
    }
  };
};

let result = isLeapYear(year);
console.log(result);

/*
console.log(isLeapYear(2024)); IS A LEAP YEAR
console.log(isLeapYear(2000)); IS A LEAP YEAR
console.log(isLeapYear(1900)); NOT A LEAP YEAR
*/