const getAverage = (testScores) => {
  let sum = 0;
  let avScore = 0;
  for(let i = 0; i < testScores.length; i++) {
    sum += testScores[i];
  }
  avScore = sum / testScores.length;
  return avScore;
};

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

const getGrade = (studentScore) => {
  if(studentScore === 100) return "A+";
  if(studentScore >= 90 && studentScore <= 99) return "A";
  if(studentScore >= 80 && studentScore <= 89) return "B";
  if(studentScore >= 70 && studentScore <= 79) return "C";
  if(studentScore >= 60 && studentScore <= 69) return "D";
  if(studentScore >= 0 && studentScore <= 59) return "F";
};

const hasPassingGrade = (studentScore) => {
  if (studentScore >= 60) return true;
  else return false;
};

const studentMsg = (testScores, studentScore) => {
  //if student passes
  if(hasPassingGrade(studentScore) === true) {
    return `Class average: ${ getAverage(testScores) }. Your grade: ${getGrade(studentScore)}. You passed the course.`;
  } else {
    // si no pasa
    return `Class average: ${getAverage(testScores)}. Your grade: ${getGrade(studentScore)}. You failed the course.`;
  };
};

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));