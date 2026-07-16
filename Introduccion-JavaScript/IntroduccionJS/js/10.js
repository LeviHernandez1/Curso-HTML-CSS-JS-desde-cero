// Objetos

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

console.log(producto);
console.log(typeof producto);

// Sintaxis de punto en objetos
// Ayuda a mostrar un valor dentro del conjunto de variables o descripcion de un objeto
// De todo el listado solo mostramos un aspecto de los tres.
console.log(producto.precio);

//Otra sintaxis 
console.log(producto["precio"]);
