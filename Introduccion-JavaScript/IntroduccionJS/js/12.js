// Activar el modo estricto del codigo js para ver lo que se debe hacer por buenas practicas
"use strict" // Correr js en modo estricto

// Objeto

const producto = {
    nombreProducto : "Monitor 20 pulgadas" ,
    precio : 300,
    disponible : true,
};
// Para evitar agregar nuevas proiedades a una variable usamos freeze
// No procesara el agregado de imagen por que esta congelnado producto con freeze 
// garantizando que su estado no cambie.
    // Con freeze no permite agregar o eliminar propiedades, ni tampoco modificarle valores a esas propiedades 
// Object.freeze(producto);
    // Con seal no permite agregar o eliminar propiedades, pero si permite modificar valores a esas propiedades 
Object.seal(producto);
producto.imagen = 'imagen.jpg';

//Para saber si un objeto esta cellado o bloqueado podemos averiguarlo con un metodo

//console.log(Object.isFrozen(producto));
console.log(Object.isSealed(producto));

console.log(producto);