//Spread Operator
// Objeto 
// Unir dos objetos en uno solo 

const producto = {
    nombreProducto : "Monitor 20 pulgadas" ,
    precio : 300,
    disponible : true,
};

const medidas = {
    peso: '1kg',
    medida: '1m',
};

// La buena practica indica que no debemos modificar los datos originales

//Con esta sintaxis podemos unir dos objetos sin alterar ninguno de los dos
const nuevoProducto = { ...producto, ...medidas};
console.log(producto); // Original
console.log(nuevoProducto);//Unido 

