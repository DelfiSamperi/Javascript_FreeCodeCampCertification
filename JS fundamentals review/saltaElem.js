/*
En este laboratorio crearás una función que omite elementos en un arreglo hasta que encuentra uno aceptable
 basado en una función de prueba específica.

Por ejemplo, para un arreglo como [1, 1, 1, 2, 1, 1, 1] y una función de prueba function(n) {return n === 2},
 el primer elemento que cumple con esto es el que está en el índice 3, por lo que todos los elementos 
 antes de ese deben ser descartados, y la salida debe ser los elementos restantes [2, 1, 1, 1].
*/

const dropElements = (arr, func) => {
  
  for(let i = 0 ; i < arr.length ; i++) {
    if(func(arr[i])) {
      return arr.slice(i);
    }
  }
  return [];
};

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;})); //[3, 4]
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;})); //[1, 0, 1]
console.log(dropElements([1, 2, 3], function(n) {return n > 0;})); //[1, 2, 3]
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;})); //[]
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})); //[7, 4]
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})) //[3, 9, 2]