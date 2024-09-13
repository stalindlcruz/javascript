// let cadena = new String();
// let cade = ''

// new Boolean()
// let bol = true

// new Array()
// let lista = []

// Los dos ejemplo de arriba son lo mismo
// Una cosa es crear un objeto de un tipo y otra es acceder a un objeto x ej: new Date().getDay() || Date.parse()

//////////////////////////////////

// let result = cadena.concat('Stalin ', 'De la Cruz')
// console.log(result);

// let nombre = 'Stalin'
// let result = nombre.concat(' De la Cruz')
// console.log(result);

// let x = Object.values({name:'qloq'})

// console.log(x);
// console.log( Math.PI);

// console.log(Math.ceil(5.4));

// let y = Array.isArray('')
// console.log(y);

//////////////////////////

// BOM

// window como este objeto se acceder el bom que representa tu ventana del navegador

//acceder al localStorage, SessionStorage, imprimir la ventana, etc

// console.log(window.screen.width);

///////////////////////////////////////

// string -- primitivo
// number -- primitivo
// boolen -- primitivo
// array -- objeto
// object -- objeto
// null -- objeto
// undefined -- primitivo

// Diferencia el unos hace el pase por valor y el otro por referencia
// Note: El pase de los primitivo es por valor, mientras que el pase de los objeto es por referencia

// let nombre = 'Stalin'
// let loadName = nombre;

// loadName = 'Engels'

// console.log(nombre);
// console.log(loadName)


// const obj01 = {
//     name: 'Stalin'
// }

// const obj02 = obj01;

// obj02.name = 'Engels'
// console.log(obj01);
// console.log(obj02)


////////////////////////////


// De esta forma yo hago una copia con el ... spread operator
// const obj01 = {
//     name: 'Stalin'
// }

// const obj02 = {...obj01};

// obj02.name = 'Engels'
// console.log(obj01);
// console.log(obj02)