/* 
    loop and calback
    -----------------
    • while
    • do while
    • for
*/


// let carList = ['Tesla', 'Honda', 'Subaru', 'Toyota', 'Mercedez']
// let count = 0;

// while (count <= 3) {
//     console.log(carList[count]);
//     // count = count + 1;
//     // count += 1;
//     count++;
// }


// do {
//     console.log(carList[count]);
//     count++;
// } while (count <= 5);


// let thename;

// do {
//     thename = prompt('Cual es tu nombre?');
// } while (thename !== 'stalin');


// for (let count = 0; count < 2; count++) {
//     console.log(carList[count]);
// }



/* --------------------------------------------------- */

// let select = document.querySelector('#carList');

// for (let count = 0; count < carList.length; count++) {
//     let options = document.createElement('option');
//     options.text = carList[count];
//     select.appendChild(options);
// }



/* --------------------------------------------------- */

// let birthDay = (stalin, engels) => {
//     stalin();
//     engels();
//   };
  
//   const stalinBirthDay = () => {
//     console.log('Stalin Birthday is in September')
//   };
  
//   const engelsBirthDay = () => {
//     console.log('Engels Birthday is in Octuber')
//   };
  
  
//   birthDay(stalinBirthDay, engelsBirthDay);


/* --------------------------------------------------- */


// let numbers = [0, 1, 2, 3, 4, 5];

// let myNumbers = (option) => {
//     for ( let count = 0; count < numbers.length; count++ ) {
//         let result = option(numbers[count]);
//         console.log(result);
//     }
// };

// let myOption = (number) => number;

// myNumbers(myOption);