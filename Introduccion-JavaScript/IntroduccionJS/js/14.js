// Arreglos o Arrays

/* 
Sirven para agrupar elementos del mismo tipo o relacionados
*/

const numeros = [10,20,30,40,50];

console.log(numeros); //Se ve en forma de arreglo
console.table(numeros);// Se muestra los mismo en forma de tabla

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
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);
console.log("----------------");
//Para evitar escribir uno por uno podemos agregarlo en una iteracion y lo escriba por si solo
// Para recorrer arreglos podemos usar forEach
numeros.forEach(function(numero){
    console.log(numero);
});
