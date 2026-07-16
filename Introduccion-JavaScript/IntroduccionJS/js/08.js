// Concatenacion

const nombre = 'Levi';
const email = 'correo@mail.com'

console.log(nombre);
console.log(email);

console.log(nombre , email);
console.log(nombre + email);
console.log(nombre + " " + email);
console.log("Nombre Cliente: " + nombre + " " + "Email:" + email);

//Template String - String Literals
// No son plantillas solo es una forma de mesclar texto convariables y funciones
// Dentro de las llaves {} podemos agregar variables o funciones
//Es importante que todo este entre comillas simples invertidas ``
console.log(`Nombre Cliente: ${nombre} Email: ${email}`);
