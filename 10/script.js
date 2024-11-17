// asincrono / sincrono https://community.listopro.com/programacion-sincrona-vs-asincrona/

// function one() {
//     console.log('lo que sea');
// }

// function two() {
//     console.log('lo que sea');
// }

// function three(callback) {
//     console.log('algo 1');
//     console.log('algo2');
//     console.log('algo3');
//     console.log('algo4');
//     console.log('algo5');
//     console.log('algo6');
//     console.log('algo7');
//     console.log('algo8');
//     callback();
//     console.log('algo9');
//     console.log('algo10');
//     console.log('algo11');
//     console.log('algo12');
// }

// one()
// two()

// three(()=>{
//     setTimeout(()=>{
//         console.log('algo desde el callback');
//     }, 10)
// })

/* --------------------------------------------------------- */

// let login = (user, pass) => {

//     const userExist = verifyUser(user);

//     if (userExist) {
//         console.log('Login existoso');
//         return;
//     }
//     console.log('Login fail');

// }

// let verifyUser = (user) => {
//    setTimeout(() => { const userName = "Stalin";
//     if (userName !== user) {
//         console.log(`El usuario "${user}" no existe `);
//         return;
//     }

//     console.log('login success');

//     return true;
//    }, 5000);
// }

// login('Stalin',123124)

/* --------------------------------------------------------- */

// function x(name) {
//   return new Promise((resolve, reject) => {
//     const backupName = "Stalin";

//     if (name === backupName) {
//       resolve(true);
//     }

//     reject(()=>{
//         console.log('falle');
        
//     });
//   });
// }

// async function printt() {
//     try {
//         await x('sds');
//     } catch (error) {
//         console.log('errorrrr: ', error());
//     }
// }

// printt();

// then promise resolved
// catch promise rejected
// finally promise finalized

// x('Stalien')
//     .then((result)=>{
//         console.log('Ok: ',result);
//     })
//     .catch((error)=>{
//         console.log('Error: ',error());
        
//     })
//     .finally(()=>{
//         console.log('Finalizado!');
//     })


/* --------------------------------------------------------- */

// async and await 

// async function x(name) {
   
//         const backupName = "Stalin";
    
//         if (name === backupName) {
//           return console.log('Ok: ',true);
//         }
    
//         return console.log('Error: ',false);
//     }


// async function y () {
//     let zzzzz = await x('Stalin')
//     //////////////
// }

// y()

// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions