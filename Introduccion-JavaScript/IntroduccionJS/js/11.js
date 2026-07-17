//Destructuring de Objetos

const producto = {
    nombreProducto : "Monitor 20 pulgadas" ,
    precio : 300,
    disponible : true,
};

// Forma anterior y que veo muy seguido
const precioProducto = producto.precio;
//const nombreProducto = producto.nombreProducto;

//console.log(precioProducto);
//console.log(nombreProducto);

// Destructuring Objetos
// Creamos la variable y extraemos el valor en un solo paso 
/* const {precio} = producto;
const {nombreProducto} = producto; */
// Para mas de una sola propiedad podemos hacerlo asi 
const {precio, nombreProducto} = producto;


console.log(precio);
console.log(nombreProducto);
