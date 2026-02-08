/*
Generar un pirámide
Objetivo: Cumplir con las historias de usuario a continuación y pasar todas las pruebas para completar el laboratorio.

Historias de usuario:

Debería tener una función llamada pirámide que tome tres argumentos.
El primer argumento debe ser una cadena que represente el carácter del patrón a repetir en la pirámide.
El segundo argumento debe ser un número entero que represente el número de filas en la pirámide.
El tercer argumento debe ser un valor Booleano.
La función pirámide debería devolver una cadena en la que el carácter del patrón se repita y se organice para formar una pirámide con el vértice apuntando hacia arriba cuando el tercer argumento sea false.
Cuando el tercer argumento es true, la pirámide debería tener el vértice apuntando hacia abajo.
La fila del vértice debe tener un solo carácter de patrón, y cada otra fila debe tener dos caracteres de patrón más que la fila anterior.
Cada fila debe comenzar con un número de espacios suficiente para colocar el carácter central de cada fila en la misma columna y no debe haber espacios al final de cada fila.
La pirámide debería comenzar y terminar con un carácter de nueva línea.
Por ejemplo, llamar a pirámide("o", 4, false) debería dar este resultado:


   o
  ooo
 ooooo
ooooooo
*/

const pyramid = (str, filas, upsideDown) => {
  let piramide = '';  
  const space = ' ';
  const width = (filas * 2) - 1;

  if(!upsideDown) {
    
    //apunta hacia arriba
    /*
       x i0
      xxx i1
     xxxxx i2
    xxxxxxx i3
    */
    
    for(let i = 0 ; i < filas ; i++) {
      const numStr = i * 2 + 1;
      const numSpaces = (width - numStr ) / 2;
      piramide += space.repeat(numSpaces) +  str.repeat(numStr) + '\n';
    };
  } else {
    //apunta hacia abajo
      /*
      xxxxxxx j4
       xxxxx j3
        xxx j2
         x j1
      */
    for (let i = filas ; i >= 1 ; i--) {
      const numStr = i * 2 + 1;
      const numSpaces = (width - numStr) / 2;
      piramide += space.repeat(numSpaces) + str.repeat(numStr) + '\n';
    };
  }
 
  return '\n' + piramide;

};

// version mas concisa
/*
const pyramid = (str, filas, upsideDown = false) => {
  let piramide = '';
  const width = filas * 2 - 1;

  const start = upsideDown ? filas - 1 : 0;
  const end = upsideDown ? -1 : filas;
  const step = upsideDown ? -1 : 1;

  for (let i = start; i !== end; i += step) {
    const numStr = i * 2 + 1;
    const numSpaces = (width - numStr) / 2;
    piramide += ' '.repeat(numSpaces) + str.repeat(numStr) + '\n';
  }

  return '\n' + piramide;
};
*/

console.log(pyramid('o',4,true));
console.log(pyramid('o',4,false));
