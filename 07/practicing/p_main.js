/* LocalStorage */

// const person = {
//     name: 'Engels',
//     age: 35
// }

// localStorage.setItem("Name", "Engels");
// localStorage.setItem("Person", person);
// localStorage.setItem("User", "user1");

// const personData = JSON.stringify(person);
// localStorage.setItem("Person", personData);

// localStorage.removeItem("User");

// let getData = localStorage.getItem("Person");
// const convertData = JSON.parse(getData);
// console.log(convertData.age);

// localStorage.clear();

/* ---------------------------------------------------------- */

/* sessionStorage */

// const emails = {
//     Engels: 'engels@gmail.com',
//     Stalin: 'stalin@gmail.com',
// }

// sessionStorage.setItem('userEmail', 'mail@email.com')

// let emailsToString = JSON.stringify(emails);
// sessionStorage.setItem('Emails', emailsToString);


// let getEmails = sessionStorage.getItem('Emails');
// let stringToParce = JSON.parse(getEmails);
// console.log(stringToParce);

/* ---------------------------------------------------------- */

/* Cookies */

// document.cookie = 'Name=Engels Valdez';
// document.cookie = 'Name21=Stalin De La Cruz; expires=Mon, sep 23 2025 14:33:00 GMT-4';
// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2026 12:00:00 UTC";

// date = new Date().getTime();
// console.log(date);

// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";  <-- Para indicar a que ruta pertenece sin el path la cookie pertenece a la pagina actual.


// let readCookie = document.cookie;

// console.log(readCookie);


// document.cookie = 'Name21=Stalin De La Cruz; expires=Mon, sep 23 2025 14:33:00 UTC; path=/';


const btn = document.querySelector('#btn');
btn.addEventListener('click', ()=>{
    const valueCookie = {
        name: 'Stalin',
        age: 20,
    }

    document.cookie = `username=${JSON.stringify(valueCookie)}; expires=Thu, 30 Sep 2025 12:00:00 UTC;`;

})

let deco = document.cookie.split('=');
let data = JSON.parse(deco[1])

console.log(document.cookie);
console.log(deco);
console.log(data);