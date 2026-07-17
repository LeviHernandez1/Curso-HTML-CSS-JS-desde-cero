// Objetos
//Video 113

const nombreProducto = "Monitor 20 pulgadas";
const precio = 300;
const disponible = true;

//Un objeto es una variable que contenga multiples descripciones de sus caracteristicas
// Acontinuacion podemos ver lo mismo que arriva en una sola variable 
const producto = {
    nombreProducto : "Monitor 20 pulgadas" ,
    precio : 300,
    disponible : true,
};

//console.log(producto);
//console.log(typeof producto);

// Sintaxis de punto en objetos
// Ayuda a mostrar un valor dentro del conjunto de variables o descripcion de un objeto
// De todo el listado solo mostramos un aspecto de los tres.
//console.log(producto.precio);

//Otra sintaxis 
//console.log(producto["precio"]);

// Video 114
// MOdificacion de objetos.

// Agregar Proiedades
// Para agregar propiedades de un objeto que no existe dento de producto por decir imagen.
producto.imagen = 'imagen.jpg';

// Eliminar propiedades
// Para eliminar propiedades de un objeto que existe utilizamo delete
delete producto.disponible;

console.log(producto);
