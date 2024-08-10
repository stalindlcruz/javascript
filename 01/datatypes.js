// Number
let edad = 29;

// Float
let price = 150.89;
let cadena = '225.50'

// String
let nombre = 'engels';

// Boolean
let tienePermiso = true;
let noTienePermiso = false;

// Undefined
let x;

// Null
let y = null;

// Symbol
// let id = Symbol("id");

// BigInt
let bigNumber = 1.7976931348623157e+308;
let infinityNumber = bigNumber * 2;

// Object
// let persona = {
//     nombre: "Israel",
//     edad: 0.9,
//     saludar: function() {
//         console.log("Hola, soy " + this.nombre);
//     }
// };

// Array
// let frutas = ["Manzana", "Banana", "Pera"];

// Function
// function sumar(a, b) {
//     return a +  b;
// };


console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(edad.toFixed(2));
console.log(edad.toString());
console.log(isNaN(edad));

console.log(price.toFixed(3));
console.log(price.toPrecision(4));
console.log(parseFloat(cadena));

console.log(isFinite(bigNumber));
console.log(isFinite(infinityNumber));

console.log(nombre.length);
console.log(nombre.charAt(0));
console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());