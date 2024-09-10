/* let cadena = new String();
let saludo = 'Hola';


new Boolean();
let Boolean = true;


new Array();
let lista = []


console.log(cadena); */



/* function Car(brand, model) {
    this.brand = brand;
    this.model = model;
    this.displayInfo = function () {
        console.log(`Car: ${this.brand} ${this.model}`);

    };
};

let myCar = new Car ('Toyota', 'Corolla');

myCar.displayInfo(); */


/* ------------------------------------------------------------------------------------------------ */



/* let nombre = new String();

let result = nombre.concat('Stalin ', 'De La Cruz');
console.log(result); */


/* let firstName = 'Engels';
let lastName = 'Valdez';

const fullName = firstName.concat(' ', lastName);

console.log(fullName); */



/* let carBrands = {
    Tesla: 'Model-X',
    Honda: 'CRV',
    Toyota: 'Hihglander',
} */

// const models = Object.values(carBrands);
// const models = carBrands.Tesla.toUpperCase();

// console.log(models);



// let employees = [ 'Engels', 'Stalin', 'Israel', ];
// let word = 'Ja';

// const result = employees[0].trim(); --> Elimina los espacios en blanco al principio y al final de una cadena.
// const result = employees[0].slice(0, 3); --> Extrae una parte de la cadena y devuelve una nueva cadena. Se pueden usar índices de inicio y fin.
// const result = employees[0].slice(1)

// const result = employees[1].replace('Stalin', 'Dahiana');

// const result = word.repeat(5);

// console.log(result);


/* Propiedades */

// const valor = Math.PI; ---> Representa el valor de PI (π), aproximadamente 3.14159.
// const valor = Math.E; ---> Representa el valor de la constante e (aproximadamente 2.718), la base de los logaritmos naturales.
// const valor = Math.SQRT2; ---> Representa la raíz cuadrada de 2, aproximadamente 1.414.


/* Metodos */

// const valor = Math.abs(-8+3); ---> Devuelve el valor absoluto de un número x.
// const valor = Math.pow(4, 3);  ---> Calcula la potencia de un número, elevando base a la exponente.
// const valor = Math.sqrt(8); ---> Devuelve la raíz cuadrada de x.

// let numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]

// const valor = Math.max(...numList); ---> Devuelve el número más grande de una lista de números.
// const valor = Math.min(...numList); ---> Devuelve el número más pequeño de una lista de números.
// const valor = Math.random(); ---> Devuelve un número pseudoaleatorio entre 0 (incluido) y 1 (excluido).
// const valor = Math.ceil(9.4); ---> Redondea x hacia arriba al entero más cercano.
// const valor = Math.floor(9.7); ---> Redondea x hacia abajo al entero más cercano.
// const valor = Math.round(9.5); ---> Redondea x al entero más cercano.




// const valor = Array.isArray(numList);
// const valor = numList.pop();  ---> Elimina el ultimo elemento y lo devuelve por consola
// const valor = numList.toString();


// console.log(valor);
// console.log(numList);




/* Boolean */

// let bool = true;

// console.log(bool.toString());
// console.log(bool.valueOf());


// let bool = new Boolean(true);

// console.log(bool.valueOf());
// console.log(bool);




/* String */


// let texto = 'Hello, Im learning JavaScript'
// const textValue = texto.charAt(0); ---> metodo
// const textValue = texto.length; ---> propiedad
// const textValue = texto.includes('Im'); ---> Devuelve true o false si existe la subcadena.
// const textValue = texto.indexOf('JavaScript'); ---> Devuelve la posición de la primera aparición de una subcadena.

// console.log(textValue);