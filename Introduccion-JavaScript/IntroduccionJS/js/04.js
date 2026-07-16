/* Tipos de datos */

//VIdeo 106
// String o cadenas de texto
const producto = "Monitor de 20 Pulgadas"; //Declaracion implicita
// Constructor
const producto2 = String('Monitor de 30 pulgadas') // Declaracion explicita
// Contructor con nueva sintaxis
const producto3 = new String('Monitor de 50 pulgadas') // Esto no da un string sino un objeto

console.log(producto)
console.log(producto2)
console.log(producto3)

// Para ver en consola el tipo de datos usamos typeof
console.log(typeof producto) //string
console.log(typeof producto2) //string
console.log(typeof producto3) //object

//Video 107
const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo web Completo';
// Metodo

//length nos permite contar numero de caracteres en un string (extencion)
//Siempre se cuenta desde cero
console.log(tweet.length); 
//IndexOf nos ayudara a identificar la posicion en un texto (posicion)
//De no ser encontrada nos mostraran un -1
console.log(tweet.indexOf('JavaScript'));
console.log(producto2.indexOf('30'));

//Includes (Retorna true o false)
console.log(tweet.includes('JavaScript')); // true
console.log(producto2.includes('Tablet')); // false

const email = 'correo@correo.com';
console.log(email.indexOf('@'));