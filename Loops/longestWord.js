const findLongestWordLength = (sentence) => {
  let count = 0;
  let longestCount = 0;
  for(const char of sentence) {
    if (char !== " ") {
      count++;
      if(count > longestCount)
      longestCount = count;
    } else {
      count = 0;
    }
  }
  return longestCount;
}
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); //6
console.log(findLongestWordLength("May the force be with you")); //5
console.log(findLongestWordLength("Google do a barrel roll")); //6
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow")); //8
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); //19
