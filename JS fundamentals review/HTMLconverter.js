const convertHTML = (str) => {
  let newStr = '';

  for (let char of str) {
    if( char === "&") newStr += "&amp;";
    else if( char === "<") newStr += "&lt;";
    else if( char === ">") newStr += "&gt;";
    else if( char === '"') newStr += '&quot;';
    else if( char === "'") newStr += "&apos;";
    else newStr += char;
  };
  return newStr;
};

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));