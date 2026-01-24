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

const piramide = (char, rows, reverse) => {
    let pyramid = '';
    const totalWidth = rows * 2 - 1;
    if (!reverse) {
        for (let i = 0; i < rows; i++) {
            const numChars = i * 2 + 1;
            const numSpaces = (totalWidth - numChars) / 2;
            pyramid += ' '.repeat(numSpaces) + char.repeat(numChars) + '\n';
        }
    } else {
        for (let i = rows - 1; i >= 0; i--) {
            const numChars = i * 2 + 1;
            const numSpaces = (totalWidth - numChars) / 2;
            pyramid += ' '.repeat(numSpaces) + char.repeat(numChars) + '\n';
        }
    }
    return '\n' + pyramid;
};
console.log(piramide("o", 4, false));
console.log(piramide("o", 4, true));