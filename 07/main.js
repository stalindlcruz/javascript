
// localStorage la data persiste siempre, no importa que cierres el navegador o las ventanas
// sessionStorage la data se eleimina cuando cierras el navegador a la venta. nota: la data persiste en cada pagina de tu web site
// document.cookie es muy semejante a localStorege con la diferencia de que expira, pera siempre que no expire permanecera 

// const person = {
//     name: 'Stalin',
//     age: 30
// }

// localStorage.setItem("Name", "Stalin");
// localStorage.setItem("Person", person);

// localStorage.removeItem("Name")

// const pepito = {
//     name: 'Engels',
//     age: 15
// }

// localStorage.clear()
// localStorage.setItem('person2', person2)

// const data = JSON.stringify(person2)
// localStorage.setItem("person", data)

// let getData = localStorage.getItem("person");

// let dataToConvert = JSON.parse(getData);
// console.log(dataToConvert.age);

// JSON.stringify() convierte un objeto a su equivalente en cadena
// JSON.parse() convierte una cadena con forma de objeto a un objeto real

/////////////

// sessionStorage.setItem("userEmail", "mail@mail.com") los metodos son los mismos de local storage para su implementacion

/////////////

// const btn = document.querySelector("#ok")

// btn.addEventListener("click", ()=>{

//     const pepito = {
//     name: 'Engels',
//     age: 15
// }
    
//     document.cookie = `username=${JSON.stringify(pepito)}; expires=Thu, 18 Dec 2025 12:00:00 UTC;`;

// })

// let decod = document.cookie.split("=")

// let dataf = JSON.parse(decod[1]);
// console.log(document.cookie);
// console.log(decod);
// console.log(dataf);


//// Para tu crear una cookie es siguiente la regla del string que esta en el ejemplo de arrib, para eliminarla es por la fecha de xpiracion, y para modificarla es sobre escribiendo la anterior. Nota: para leer una cookie solo debes llamar a document.cookie y vendra la cookie como un string y ya di ahi en adelante debes descomponer ese estring para acceder a la parte que te interece de la cookie, ver ejemplo de arriba


// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals


// const cadena = `same` cuando usa el literal puedes usar "${}" para anidar y no usar el simbolo de +
// const cadena1 = 'same'
// const cadena2= "same"

// hay una ultima regla de las cadenas-> si vas a usar comillas dobles y quieres usar mas comillar dentro del string no puedes volver a usar comillas dobles y biceverza

// let msj="tal cosa 'dfdfd' dfjkdjf"
// let msj='tal cosa "dfdfd" dfjkdjf'


const test = new Date();
test.setDate(test.getDate() + 1);
console.log(test);

// const currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 1);
// const tomorrowDate = currentDate.toUTCString();

const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + days);
    const expires = currentDate.toUTCString();

console.log(expires);

