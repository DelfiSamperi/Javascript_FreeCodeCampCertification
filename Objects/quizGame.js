let questions = [
  {
    category: 'Historia y Geografía',
    question: '¿Cuál es la capital de Australia?',
    choices: ['a. Sidney', 'b. Melbourne', 'c. Canberra'],
    answer: 'a. Sidney' 
  },
  {
    category: 'Ciencia y Naturaleza',
    question: '¿Qué gas esencial para la vida humana absorben las plantas?',
    choices: ['a. Oxígeno', 'b. Nitrógeno', 'c. Dióxido de Carbono'],
    answer: 'c. Dióxido de Carbono' 
  },
  {
    category: 'Ciencia y Naturaleza',
    question: '¿Qué animal es el mamífero más grande del mundo?',
    choices: ['a. Elefante', 'b. Ballena Azul', 'c. Oso Polar'],
    answer: 'b. Ballena Azul' 
  },
  {
    category: 'Arte y Literatura',
    question: '¿Quién pintó la Mona Lisa?',
    choices: ['a. Leonardo da Vinci', 'b. Miguel Ángel', 'c. Van Gogh'],
    answer: 'a. Leonardo da Vinci' 
  },
  {
    category: 'cat3',
    question: '¿Quién compuso la Novena Sinfonía?',
    choices: ['a. Mozart', 'b. Beethoven', 'c. Vivaldi'],
    answer: 'b. Beethoven' 
  }
];
// let questions = [];
//questions.push(question1, question2, question3, question4, question5);

const getRandomQuestion = (questionsArr) => {
  const randomIndex = Math.floor(Math.random() * questionsArr.length);
  // let randomQuestion = questionsArr[randomIndex]['question']; //<--devuelve solo la pregunta
  const randomQuestion = questionsArr[randomIndex]; //<--devuelve el objeto completo
  return randomQuestion;
};

const getRandomComputerChoice = (questionObj) => {
  const choicesArr = questionObj.choices;
  const randomIndex = Math.floor(Math.random() * (choicesArr.length));
  const randomChoice = choicesArr[randomIndex];
  return randomChoice; //<-- devuelve una sola opcion
};

const getResults = (questionObj, randomChoice) => {
  //consolelog('Pregunta completa: ', questionObj);
  //console.log('Elección de la computadora: ', randomChoice);

  if(randomChoice === questionObj.answer) {
    return `The computer's choice is correct! The answer is: ${ questionObj.answer}`; 
  } else {
      return `The computer's choice is wrong. The correct answer is: ${ questionObj.answer}`
  };
};

const randomQuestion = getRandomQuestion(questions);
console.log(`Your question is: ${ randomQuestion.question}`);
console.log('Choosing an answer...')
const computerChoice = getRandomComputerChoice(randomQuestion);
console.log(`Computer answer is: ${ computerChoice}`);
console.log('waiting for results...');
console.log(getResults(randomQuestion, computerChoice));
