// Arreglos o Arrays

/* 
Sirven para agrupar elementos del mismo tipo o relacionados
*/

const numeros = [10,20,30,40,50];

console.log(numeros); //Se ve en forma de arreglo
//console.table(numeros);// Se muestra los mismo en forma de tabla

// En un constructor
// const meses = new Array('Enero','Febrero','Marzo','Abril','Mayo');
const meses = ['Enero','Febrero','Marzo','Abril','Mayo'];
console.table(meses);

const arreglo = ["Hola",10, true, "si",null,{nombre: "Levi", trabajo: "Programador"}, [1,2,3]];
console.log(arreglo);

//Acceso a elementos de un arreglo
console.log(numeros[4])

//Conocer la extencion de un arreglo
console.log(meses.length)

//Acceso a los valores de un arreglo 
// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);
console.log("----------------");
//Para evitar escribir uno por uno podemos agregarlo en una iteracion y lo escriba por si solo
// Para recorrer arreglos podemos usar forEach
numeros.forEach(function(numero){
    console.log(numero);
});

// Video 119 
//Metodos para los Arrays
//Modificacion de los arreglos

//Agrega el valor 60 en la posicion del indice 5 y luego lo mostramos
//Al tener un valor en el arreglo lo va a reescribir con el nuevo que se este actualizando
numeros[5] = 60;
console.table(numeros);

// Metodo push para agregar elementos al final del arreglo.
//Sin saber cuanto mida la posicion siempre se agregaran al final de arreglo
numeros.push(60);
numeros.push(70,80,90);

//Con unshift podemos agregarlos al iunoicio del arreglo
numeros.unshift(-10,-20,-30);

//Para elminar un elemento
// meses.pop(); // Elimina el ultimpo elemento del arreglo
// meses.shift(); // Elimina el primer elemento del arreglo
//meses.splice(2,1); //Eliminar con una posicion especifica el el 2 es la posicion del indice y el uno cuantos elementos se quieren eliminar

//Esto no es una buena practica ya que estamos modificando los arreglos originales.
//Lo evitamos con Rest Operator o Spread Operator

//const nuevoArreglo = [...meses,'Junio']; // Equivalente al push pero evutamos modificar el original
//La posicion inporta ya que donde se coloque lo concatenara al inicio o al final dependiendo de los que se quiera.
const nuevoArreglo = ['Junio', ...meses];// Lo agrego al principio el mes

console.table(meses);
console.table(nuevoArreglo);

