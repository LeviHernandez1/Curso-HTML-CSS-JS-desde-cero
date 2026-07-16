// Orden de ejecucion de los operadores 
// Diviciones y multiplicaciones tienen mas peso que las sumas y restas.
/* 
    Paréntesis
    Exponentes
    Multiplicaciones
    Division
    Suma o Adicion
    Resta o Sustraccion
*/

let resultado;

resultado = (20 + 30) * 2;

resultado = (100 + 200 + 300) * 1.16;


console.log(resultado);

// Incrementos
let puntaje = 10;
puntaje++;
puntaje -= 10;


//console.log(puntaje++); // Primero muestra el valor y luego incrementa por eso muestra 10
console.log(++puntaje); // Primero incrementa el valor y luego muestra el valor incrementado a 11

// El incremento o decremento es similar segun el operando de incremento.
/* 

Incrementar
    puntaje++; Primero lee y despues incrementa en 1.
    ++puntaje; Primero incrementa y despues muestra
Incremento por valores mayores a uno.
    puntaje += 10; Primero lee y despues incrementa en 10.

Decremento
    puntaje--; Primero lee y despues decrementan en 1
    --puntaje; Primero decrementa en 1 y despues muestra
Decremento por valores mayores a uno.
    puntaje -= 10; Primero lee y despues incrementa en 10.


*/