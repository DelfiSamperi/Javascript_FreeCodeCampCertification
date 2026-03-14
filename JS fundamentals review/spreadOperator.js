/*
Implementa una Unión Única Ordenada
Objetivo: Cumplir con las historias de usuario a continuación y pasar todas las pruebas para completar el laboratorio.

Historias de usuario:

Debes tener una función llamada uniteUnique.
La función uniteUnique debe aceptar dos o más arrays como argumentos.
La función debe devolver un nuevo arreglo que contenga valores únicos de los arreglos de argumentos, en el orden en que se encuentran por primera vez en los argumentos. Por ejemplo, una entrada como [1, 2, 4], [2, 3, 5] tendría una salida de [1, 2, 4, 3, 5].
*/

const uniteUnique = (...arrays) => {
  let result = [];
  for(let arr of arrays) {
    for(let value of arr) {
      if(!result.includes(value)) {
        result.push(value);
      };
    };
  };
  return result;
};

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
//[1, 3, 2, 5, 4].
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
// [1, 2, 3, 5].
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
// [1, 2, 3, 5, 4, 6, 7, 8].
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));
// [1, 3, 2, 5, 4, 6].
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));
// [1, 3, 2, 5, 4].