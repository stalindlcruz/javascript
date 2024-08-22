// let car = {
//     plate: 'NH209167',
//     model: 'Tesla',
//     features: [
//         'Air Conditioning',
//         'Cruise Control',
//         'Leather seats',
//         'Reverse Camera',
//     ],
//     priceByColor: {
//         white: '$48,000',
//         black: '$49,999',
//         red: '$54,950',
//         Blue: {
//             darBlue: '$56,749',
//             lightBlue: '$59,999',
//         }
//     }
// }

// console.log(car.priceByColor.Blue.lightBlue);
// console.log(car.features[2]);



// let lista = [
//     ['1', '2', '3'],
//     true,
//     {}
// ]

// console.log(lista[0][1]);

// let fruitList = ['Apple', 'Peach', 'Blueberry']


// function printMessage (msj) {
//     console.log(msj);  
// }

// printMessage('Holaaa')


// function getMessage(msj) {
//     return msj
// }

// let message = getMessage('Keloque')

// console.log(message);



// let fruitList = ['Apple', 'Peach', 'Blueberry']

// function getFruitlist(position) {
//     if (position == 0) {
//         console.log('Buena eleccion')
//         return fruitList[position]
//     }
//     else {
//         console.log('Mala desiscion');
//         return 'Hola'
//     }
    
// }

// let result = getFruitlist(0)

// console.log(result);



// let getFruitlist = function() {
//     return getFruitlist;
// }

// let getFruitlist = () => {
//     return getFruitlist;
// }

// let getFruistList = () =>fruitList;

// console.log(getFruitlist());



// function a () {
//     console.log('ms');
//     return 'Cadena';
// }


// function sumar (n1, n2) {
//     return n1 + n2
// }

// let result = sumar(10, 22);

// console.log(result);



// let multiplicar = (n1, n2) => {
//     return n1 * n2;
// }

// let result = multiplicar(10, 2);

// console.log(result);



// let dividir = (n1, n2) => n1 / n2;

// let result = dividir(8, 4);

// console.log(result);



// let printDiferentNameToEngels = (nombre) => {

//     if (nombre !== 'Engels') {
//         console.log(nombre);
//     }

//     return;
// }

// let identificationName = printDiferentNameToEngels('Engels');

// console.log(identificationName);



// let number = 2;

// if (number !== '2') {
//     console.log('Yes, is not equal');
// } else {
//     console.log('Not, are equal');   
// }



// let fruit = 'banana';

// switch (fruit) {
//     case 'orange':
//         console.log('orange');
//         break;

//     case 'banana':
//         console.log('banana');
//         break;

//     default:
//         console.log('default');
//         break;
// }



// let fruits = ['orange', 'banana'];

// switch (fruits[1]) {
//     case 'orange':
//         console.log('orange');
//         break;

//     case 'banana':
//         console.log('banana');
//         break;

//     default:
//         console.log('default');
//         break;
// }


// let frtL = document.querySelector('#frtL');

// frtL.addEventListener('change', ()=>{
//     switch (frtL.value) {
//         case 'apple':
//             console.log('Este es el valor de', frtL.value);
//             break;

//         case 'kiwi':
//             console.log('Este es el valor de', frtL.value);
//             break;

//         case 'peach':
//             console.log('Este es el valor de', frtL.value);
//             break;
    
//         default:
//             console.log('default');
//             break;
//     }
// })




// let answers = ['Home', 'Working']
// let question = 'Where are you?';

// answers.forEach (answers => {
//     switch (answers) {
//         case 'Home':
//             console.log('Call me');
//             break;

//         case 'Working':
//             console.log('Im working');
//             break;
    
//         default:
//             console.log(question);
//             break;
//     }
// })



// let lookingForEngels = (answer) => {

//     switch (answer) {
//         case 'home':
//             console.log('call me');
//             break;

//         case 'working':
//             console.log('Im working');
//             break;
    
//         default:
//             console.log('where are you');
//             break;
//     }
// }

// lookingForEngels();