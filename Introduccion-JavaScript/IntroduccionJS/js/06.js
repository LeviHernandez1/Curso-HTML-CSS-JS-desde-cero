/* Objeto Math */

// La ventana global
/* 
En el navegador podemos ver los diferentes metodos de JavaScript en la terminal 
donde podemos ver todos los disponibles en listado escribiendo en trerminal 
window
Escroleamos para buscar Math: Math {}
Podremos ver todas las funciones que podemos aplicar en Math e identificar el que 
necesitemos.
*/

// Sintaxis.
window.Math.random(); //Entrega un numero random '0.7321959548867165, muy raro que pase de 1'
Math.random(); // Podemos no escribir window ya que siempre estamos en la ventana referencia.

let resultado;

resultado = Math.round(2.4); //Funcion para redondear, el decimal indica si para arriba o para abajo
resultado = Math.ceil(2.2); //Funcion para redondear hacia arriba sin importar el .5
resultado = Math.floor(2.9); //Funcion para redondear hacia abajo sin importar el .5

resultado = Math.PI; // Funcion para PI
resultado = Math.sqrt(144);// Funcion de raiz cuadrada
resultado = Math.abs(-200);// Funcion para cambiar negativos a positivos 
resultado = Math.min(3,5,1,8,2,10);// Funcion para encontrar el valor minimo de un listado
resultado = Math.max(3,5,1,8,2,10);// Funcion para encontrar el valor maximo de un listado
resultado = Math.random();
resultado = Math.floor(Math.random() * 30);


console.log(resultado);
